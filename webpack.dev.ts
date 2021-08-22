import path from "path";
import { HotModuleReplacementPlugin, DefinePlugin, Configuration } from "webpack";
import merge from "webpack-merge";
import config from "./webpack.conf";

export = merge(config, <Configuration>{
	mode: "development",
	output: {
		filename: "app/[name].dev.js"
	},
	plugins: [
		new HotModuleReplacementPlugin,
		new DefinePlugin({ PRODUCTION: JSON.stringify(false) })
	],
	devtool: "eval-source-map",
	devServer: {
		port: 8080,
		contentBase: path.resolve("web"),
		index: "index.html",
		watchContentBase: true,
		writeToDisk: false,
		historyApiFallback: {
			index: "/index.html",
			disableDotRule: true
		},
		proxy: {
			"/api": {
				target: "http://localhost/",
				secure: false
			}
		},
		hot: true,
		open: true,
		host: "localhost"
	}
});
