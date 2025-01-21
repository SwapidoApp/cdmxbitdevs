import { Post } from "./types";
import { config } from "./config";

export function baseTemplate(content: string, title: string) {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ${config.title}</title>
  
  <!-- Open Graph / Social Media Meta Tags -->
  <meta property="og:title" content="${title} | ${config.title}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="${config.baseUrl}/cdmxbitdevs.png">
  <meta property="og:url" content="${config.baseUrl}">
  <meta property="og:description" content="Seminarios socráticos de desarrolladores Bitcoin en CDMX">
  <meta property="og:site_name" content="${config.title}">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div class="Header">
    <div class="Header-inner">
      <div class="Header-logo">
        <a href="/">${config.title}</a>
      </div>
      <nav class="Header-nav">
        ${config.menu
          .map(
            (item) =>
              `<a href="${item.url}" ${
                item.external ? 'target="_blank" rel="noopener nofollow"' : ""
              }>${item.name}</a>`
          )
          .join("")}
      </nav>
    </div>
  </div>

  <div class="Separator">================================================================================</div>

  ${content}

  <div class="Separator">================================================================================</div>

  <div class="Footer">
    <div class="Footer-inner">
      <div class="Footer-source">
      </div>
      <div class="Footer-rss">
        <a href="/feed.xml">Canal RSS</a>
      </div>
    </div>
  </div>
</body>
</html>`.trim();
}

export function postTemplate(post: Post) {
  return baseTemplate(
    `
  <div class="Post">
    <h1 class="Post-title">${post.title}</h1>
    <div class="Post-info">
      <span>${post.date}</span>
      ${
        post.meetup
          ? `
        <span>
          <a href="${post.meetup}" target="_blank" rel="noopener nofollow">
            Link to Meetup
          </a>
        </span>
      `
          : ""
      }
    </div>
    <div class="Post-content">
      ${post.content}
    </div>
  </div>`,
    post.title
  );
}
