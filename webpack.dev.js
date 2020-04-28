const merge = require("webpack-merge");

module.exports = merge(require("./webpack.conf.js"), {
	mode: "development",
	devServer: {
        port: 8080,
		host: "0.0.0.0",
        contentBase: "./src",
		index: require("./web-app.json").config.spa_root,
        watchContentBase: true,
		writeToDisk: true,
		historyApiFallback: { index: "/" + require("./web-app.json").config.spa_root },
		stats: {
    		modules: false,
    		cached: false,
    		colors: true,
    		chunk: false
  		}
    }
});
