import * as path from "node:path";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react(), vike()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	css: {
		postcss: "./postcss.config.js",
	},
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:9058",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});
