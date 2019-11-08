const path = require("path");
const webpack = require("webpack");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "www");

const config = {
    entry: SRC_DIR + "/app/index.js",
	mode: "production",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
	optimization: {
	    namedModules: false,
	    namedChunks: false,
	    nodeEnv: "production",
	    flagIncludedChunks: true,
	    occurrenceOrder: true,
	    sideEffects: true,
	    usedExports: true,
	    concatenateModules: true,
	    splitChunks: {
	        hidePathInfo: true,
	        minSize: 30000,
	        maxAsyncRequests: 5,
	        maxInitialRequests: 3,
	    },
	    noEmitOnErrors: true,
	    checkWasmTypes: true,
	    minimize: true,
	},
	plugins: [
		new webpack.DefinePlugin({
  			"process.env.NODE_ENV": JSON.stringify("production")
		}),
		new webpack.optimize.UglifyJsPlugin({
			extractComments: true,
			parallel: true,
			mangle: true,
			ie8: false,
			compress: {
				warnings: false,
			}
		})
	],
    module: { loaders: require("./loaders.js")(SRC_DIR) }
};

module.exports = config;
