const merge = require("webpack-merge");

module.exports = merge(require("./webpack.conf.js"), {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
        port: 8080,
		host: "0.0.0.0",
        contentBase: "./src",
		index: require("./web-app.json").config.spa_root,
        watchContentBase: true,
		writeToDisk: false,
		historyApiFallback: { index: "/" + require("./web-app.json").config.spa_root },
		proxy: {
        	"/api": {
            	target: "http://localhost:4000",
            	secure: false
        	}
    	},
		hot: true,
		stats: {
    		modules: false,
    		cached: false,
    		colors: true,
    		chunk: false
  		}
    }
});
