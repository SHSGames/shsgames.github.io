import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";
import pjson from "./package.json";
import manifest from "./app/manifest.json";
import { VitePWA as vitePWA } from "vite-plugin-pwa";
import htmlPlugin from "vite-plugin-html-config";

config();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		vitePWA({
			includeAssets: [ "/app/static/favicon.svg" ],
			srcDir: "app",
			manifest,
			scope: "script"
		}),
		htmlPlugin({
			metas: [ {
				name: "description",
				content: manifest.description
    		} ]
		})
	],
	root: "app",
	server: {
		port: 8080,
		hmr: {
			protocol: "ws",
			host: "localhost"
		},
		proxy: {
			"/api": {
				target: `http://localhost:${process.env.PORT || pjson.webserver.http.port}`,
				changeOrigin: true
			}
		}
	},
	build: {
		outDir: "../public_html"
	}
});
