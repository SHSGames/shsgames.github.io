const merge = require("webpack-merge");
const { DefinePlugin } = require("webpack");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(require("./webpack.conf.cjs"), {
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
            chunks: "all",
            minSize: 20000,
            maxSize: 0,
            minChunks: 6,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
        },
        noEmitOnErrors: true,
        checkWasmTypes: true,
        minimize: true,
        minimizer: [
			new TerserJSPlugin({}),
			new OptimizeCSSAssetsPlugin({})
		]
    },
	plugins: [
		new DefinePlugin({
  			PRODUCTION: JSON.stringify(true),
		})
	]
});
