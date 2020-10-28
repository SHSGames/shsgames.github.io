const { HotModuleReplacementPlugin } = require("webpack");
const merge = require("webpack-merge");

module.exports = merge(require("./webpack.conf.js"), {
	mode: "development",
	plugins: [ new HotModuleReplacementPlugin() ],
	devServer: {
        port: 8080,
        contentBase: "./src",
		index: require("./web-app.json").config.spa_root,
        watchContentBase: true,
		writeToDisk: false,
		historyApiFallback: {
			index: "/" + require("./web-app.json").config.spa_root,
			disableDotRule: true
		},
		proxy: {
        	"/api": {
            	target: "http://localhost:4000/",
            	secure: false
        	}
    	},
		hot: true,
		inline: true,
		open: true,
		host: "localhost",
		stats: "minimal"
    }
});
