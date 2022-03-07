import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";
import pjson from "./package.json";
import manifest from "./app/manifest.json";
import { VitePWA } from "vite-plugin-pwa";
import htmlPlugin from "vite-plugin-html-config";

config();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			srcDir: "app",
			registerType: "autoUpdate",
			scope: "/",
			manifest: <unknown>manifest
		}),
		htmlPlugin({
			metas: [ {
				name: "description",
				content: manifest.description
    		}, {
				name: "theme-color",
				content: manifest.theme_color
			} ],
			links: [ {
				rel: "apple-touch-icon",
				href: "/apple_touch_icon.png"
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
