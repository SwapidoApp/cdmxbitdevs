import { mkdir, readdir, readFile, writeFile, cp, access } from "fs/promises";
import { join } from "path";
import { marked } from "marked";
import { Post } from "./types";
import { config } from "./config";
import { baseTemplate, postTemplate } from "./templates";
import { Feed } from "feed";

const POSTS_DIR = "posts";
const OUTPUT_DIR = "dist";
const PUBLIC_DIR = "public";

async function parsePost(filename: string): Promise<Post> {
  const content = await readFile(join(POSTS_DIR, filename), "utf-8");

  // Split on --- but keep empty strings to maintain proper indexing
  const parts = content.split("---");

  // Front matter is the second element (index 1) between the first two ---
  const frontMatter = parts[1];

  // Content is everything after the second ---
  const contentParts = parts.slice(2);

  // Parse front matter more carefully
  const metadata = frontMatter
    .trim()
    .split("\n")
    .reduce((acc, line) => {
      // Skip empty lines
      if (!line.trim()) return acc;

      const [key, ...valueParts] = line.split(":");
      const value = valueParts
        .join(":")
        .trim()
        .replace(/^"(.*)"$/, "$1")
        .trim(); // Extra trim for safety

      if (key && value) {
        return { ...acc, [key.trim()]: value };
      }
      return acc;
    }, {} as Record<string, string>);

  // Extract date from filename (YYYY-MM-DD format)
  const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/);
  const date = dateMatch
    ? dateMatch[1]
    : new Date().toISOString().split("T")[0];

  return {
    ...metadata,
    date,
    content: marked(contentParts.join("---")),
    slug: filename.replace(".md", ""),
  } as Post;
}

// Add a helper function for date formatting
function formatDate(dateStr: string): string {
  // Force UTC to avoid timezone shifts
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  const dayStr = date.getUTCDate().toString().padStart(2, "0");
  const monthStr = date.toLocaleString("en", {
    month: "short",
    timeZone: "UTC",
  });
  const yearStr = date.getUTCFullYear();

  return `${dayStr} ${monthStr} ${yearStr}`;
}

export async function build() {
  // Create output directory
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Check if public directory exists before trying to create it
  try {
    await access(PUBLIC_DIR);
  } catch {
    await mkdir(PUBLIC_DIR, { recursive: true });
  }

  // Copy public files
  await cp(PUBLIC_DIR, OUTPUT_DIR, { recursive: true }).catch(() => {
    console.log("No public directory found");
  });

  // Read and parse all posts
  const files = await readdir(POSTS_DIR);

  const posts = await Promise.all(
    files.filter((f) => f.endsWith(".md")).map(parsePost)
  );

  // Generate HTML for each post
  for (const post of posts) {
    const html = postTemplate(post);
    await writeFile(join(OUTPUT_DIR, `${post.slug}.html`), html);
  }

  // Generate index page
  const indexHTML = baseTemplate(
    `
<div class="Home">
  <p class="Home-about">${config.description}</p>
  
  <div class="Home-posts">
    <h2 class="Home-posts-title">Próximos y Recientes Eventos</h2>
    ${posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 7)
      .map(
        (post) => `
    <div class="Home-posts-post">
      <span class="Home-posts-post-date">${formatDate(post.date)}</span>
      <span class="Home-posts-post-arrow">»</span>
      <a class="Home-posts-post-title" href="/${post.slug}.html">${
          post.title
        }</a>
    </div>`
      )
      .join("\n")}
    <p><a href="/events.html">Ver todos los eventos</a></p>
  </div>
</div>`,
    config.title
  );

  await writeFile(join(OUTPUT_DIR, "index.html"), indexHTML);

  // Generate events page
  const eventsHTML = baseTemplate(
    `
<div class="Home">
  <div class="Home-posts">
    <h2 class="Home-posts-title">Eventos</h2>
    ${posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(
        (post) => `
    <div class="Home-posts-post">
      <span class="Home-posts-post-date">${formatDate(post.date)}</span>
      <span class="Home-posts-post-arrow">»</span>
      <a class="Home-posts-post-title" href="/${post.slug}.html">${
          post.type === "socratic"
            ? `Socratic ${post.title.split(" ").pop()}`
            : post.title
        }</a>
    </div>`
      )
      .join("\n")}
  </div>
</div>`,
    "Eventos"
  );

  await writeFile(join(OUTPUT_DIR, "events.html"), eventsHTML);

  // Generate RSS feed
  const feed = new Feed({
    title: "Bitcoin Developers Latam",
    description:
      "Bitcoin Developers Latam es un meetup dedicado a la investigación y desarrollo de Bitcoin.",
    id: "https://bitcoindevs.xyz/",
    link: "https://bitcoindevs.xyz/",
    language: "es",
    favicon: "https://bitcoindevs.xyz/favicon.ico",
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  });

  // Add posts to feed
  for (const post of posts) {
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `https://bitcoindevs.xyz/${post.slug}`,
      description: post.content,
      date: new Date(post.date),
    });
  }

  // Write feed to file
  await writeFile(join(OUTPUT_DIR, "feed.xml"), feed.rss2());
}

// Only run build if this is the main module
if (import.meta.main) {
  build().catch(console.error);
}
