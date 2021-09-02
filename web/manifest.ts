/* eslint camelcase: off */
/* eslint @typescript-eslint/no-var-requires: off */
import path from "path";
import { ManifestOptions } from "webpack-pwa-manifest";
const packageJSON = require(path.resolve("package.json"));

export default <ManifestOptions>{
	name: packageJSON["display-name"] || packageJSON.name,
	short_name: packageJSON["display-name"] || packageJSON.name,
	version: packageJSON.version,
	description: packageJSON.description,
	developerName: packageJSON.author,
	developerURL: "https://joshmerlino.github.io",
	background_color: "#ffffff",
	theme_color: "#ffffff",
	orientation: "portrait",
	crossorigin: "use-credentials",
	icons: [ {
	  	src: "web/static/icon.png",
	  	sizes: [ 96, 128, 192, 256, 384, 512 ],
		purpose: "maskable",
		destination: "static/"
	}, {
	  	src: "web/static/icon.png",
	  	sizes: [ 96, 128, 192, 256, 384, 512 ],
		destination: "static/"
	} ]
};
