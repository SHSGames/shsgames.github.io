import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";
import pjson from "./package.json";

config();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [ react() ],
	root: "app",
	server: {
		port: 8080,
		proxy: {
			"/api": {
				target: `http://localhost:${process.env.PORT || pjson.webserver.http.port}`,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, "")
			}
		}
	},
	build: {
		outDir: "../public_html"
	}
});
