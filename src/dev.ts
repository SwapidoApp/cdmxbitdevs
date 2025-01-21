import { watch } from "fs";
import { build } from "./build";

const WATCH_DIRS = ["src", "posts", "assets"];
const DEFAULT_PORT = 3000;

async function findAvailablePort(startPort: number): Promise<number> {
  for (let port = startPort; port < startPort + 100; port++) {
    try {
      const server = Bun.serve({ port, fetch: () => new Response() });
      server.stop();
      return port;
    } catch (error) {
      // @ts-ignore
      if (error?.code !== "EADDRINUSE") throw error;
      continue;
    }
  }
  throw new Error("No available ports found");
}

async function startDevServer() {
  // Initial build
  await build();
  console.log("Initial build complete");

  // Watch for changes
  for (const dir of WATCH_DIRS) {
    watch(dir, { recursive: true }, async (_eventType, filename) => {
      try {
        console.log(`Change detected in ${filename}`);
        await build();
        console.log("Rebuild complete");
      } catch (error) {
        console.error("Build failed:", error);
      }
    });
  }

  // Find available port and start server
  const port = await findAvailablePort(DEFAULT_PORT);

  Bun.serve({
    port,
    development: true,
    async fetch(req) {
      const url = new URL(req.url);
      let filePath = url.pathname;

      // Handle root and events paths
      if (filePath === "/") {
        filePath = "/index.html";
      } else if (filePath === "/events") {
        filePath = "/events.html";
      }

      console.log("Serving:", filePath); // Debug log

      try {
        const file = Bun.file(`dist${filePath}`);
        const exists = await file.exists();
        if (!exists) {
          return new Response("Not Found", { status: 404 });
        }
        return new Response(file);
      } catch (error) {
        console.error("Error serving file:", error);
        return new Response("Server Error", { status: 500 });
      }
    },
  });

  console.log(`Development server running at http://localhost:${port}`);
}

startDevServer().catch(console.error);
