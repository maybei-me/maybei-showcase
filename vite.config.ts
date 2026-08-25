import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { majlisWaitlistInput, saveMajlisWaitlistEntry } from "./server/majlisWaitlist";

function vitePluginMajlisWaitlist(): Plugin {
  return {
    name: "majlis-waitlist-api",
    configureServer(server: ViteDevServer) {
      server.middlewares.use("/api/majlis-waitlist", (req, res, next) => {
        if (req.method !== "POST") return next();

        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          try {
            const input = majlisWaitlistInput.safeParse(JSON.parse(body));
            if (!input.success) {
              res.writeHead(400, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ ok: false, message: "Please provide a valid email and complete any entered fields." }));
              return;
            }

            const result = await saveMajlisWaitlistEntry(input.data);
            res.writeHead(result === "created" ? 201 : 200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
              ok: true,
              status: result,
              message: result === "created" ? "You are on the Majlis waitlist." : "This email is already on the Majlis waitlist.",
            }));
          } catch (error) {
            console.error("[Majlis waitlist] Development API error", error);
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ ok: false, message: "We could not save your place right now. Please try again shortly." }));
          }
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), jsxLocPlugin(), vitePluginMajlisWaitlist()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: ["localhost", "127.0.0.1"],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
