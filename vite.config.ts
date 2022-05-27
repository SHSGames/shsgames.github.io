import react from "@vitejs/plugin-react";
import { config } from "dotenv";
import { readFileSync } from "fs";
import path from "path";
import { defineConfig } from "vite";
import htmlPlugin from "vite-plugin-html-config";
import { VitePWA } from "vite-plugin-pwa";
import YAML from "yaml";
import manifest, { base } from "./app/manifest.json";
import pjson from "./package.json";

config();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			srcDir: "app",
			registerType: "autoUpdate",
			scope: base,
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
				href: base + "apple_touch_icon.png"
			} ]
		})
	],
	base,
	define: {
		"PRODUCTION": process.env.NODE_ENV?.toLowerCase() === "production",
		"APP_MANIFEST": {
			name: manifest.name,
			version: pjson.version,
			description: manifest.description,
			author: pjson.author
		},
		"LastGames": YAML.parse(readFileSync(path.resolve("./game-manifest.yml"), "utf-8"))
	},
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
			},
			"/gun": {
				target: `http://localhost:${process.env.PORT || pjson.webserver.http.port}`,
				changeOrigin: true
			}
		}
	},
	build: {
		outDir: "../public_html/next",
		rollupOptions: {
			input: {
				main: new URL("./app/index.html", import.meta.url).pathname,
				player: new URL("./app/player.html", import.meta.url).pathname
			}
		}
	},
	resolve: {
		alias: {
			"styles": path.resolve(__dirname, "./app/styles"),
			"pages": path.resolve(__dirname, "./app/pages")
		}
	}
});
