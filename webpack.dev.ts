import { Configuration, DefinePlugin, HotModuleReplacementPlugin } from "webpack";
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
	devtool: "cheap-module-source-map",
	devServer: {
		port: 8080,
		liveReload: false,
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
		host: "localhost"
	},
	watchOptions: {
		poll: true
	}
});
