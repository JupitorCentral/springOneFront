import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import * as path from "path";

export default defineConfig({
      plugins: [react(), vike()],
      resolve: {
            alias: {
                  "@": path.resolve(__dirname, "./src"),
            },
      },
      server: {
            proxy: {
                  "/api": {
                        target: "http://localhost:8080",
                        changeOrigin: true,
                        rewrite: (path) => path.replace(/^\/api/, ""),
                  },
            },
      },
});
