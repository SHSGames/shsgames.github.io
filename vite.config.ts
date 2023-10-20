import react from "@vitejs/plugin-react";
import { config } from "dotenv";
import path from "path";
import { defineConfig } from "vite";
import htmlPlugin from "vite-plugin-html-config";
import { VitePWA } from "vite-plugin-pwa";
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
			manifest: <unknown>manifest,
			workbox: {
				globIgnores: [
					"**/IodineGBA/index.html",
					"**/node_modules/**/*"
				]
			}
		}),
		htmlPlugin({
			metas: [ {
				name: "description",
				content: manifest.description
    		}, {
				name: "theme-color",
				content: manifest.theme_color
			}, {
				name: "og:image",
				content: "/banner.png"
			} ],
			links: [ {
				rel: "apple-touch-icon",
				href: "/apple_touch_icon.png"
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
		}
	},
	root: "app",
	server: {
		port: 8080,
		hmr: {
			protocol: "ws",
			host: "localhost"
		}
	},
	build: {
		outDir: "../public_html"
	},
	resolve: {
		alias: {
			"styles": path.resolve(__dirname, "./app/styles"),
			"pages": path.resolve(__dirname, "./app/pages")
		}
	}
});
