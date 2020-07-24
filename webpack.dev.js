const merge = require("webpack-merge");

module.exports = merge(require("./webpack.conf.js"), {
	mode: "development",
	devServer: {
        port: 8080,
		host: "0.0.0.0",
        contentBase: "./src",
		index: require("./web-app.json").config.spa_root,
        watchContentBase: true,
		writeToDisk: false,
		devtool: "inline-source-map",
		historyApiFallback: { index: "/" + require("./web-app.json").config.spa_root },
		proxy: {
        	"/api": {
            	target: "http://localhost:3000",
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
