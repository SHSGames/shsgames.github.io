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
            maxSize: 0,
            minChunks: 1,
			cacheGroups: {
	        	vendor: {
					test: /[\\/]node_modules[\\/]/,
                	name: "lib",
                	enforce: true,
                	chunks: "all",
	        	}
	      	}
        },
        noEmitOnErrors: true,
        checkWasmTypes: true,
        minimize: true,
        minimizer: [
			new TerserJSPlugin({}),
			new OptimizeCSSAssetsPlugin({})
		],
		runtimeChunk: {
      		name: "runtime",
    	}
    },
	plugins: [
		new DefinePlugin({ PRODUCTION: JSON.stringify(true) })
	]
});
