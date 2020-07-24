const merge = require("webpack-merge");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(require("./webpack.conf.js"), {
	mode: "production",
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
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
	}
});
