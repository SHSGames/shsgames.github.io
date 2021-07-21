import merge from "webpack-merge";
import { Configuration, DefinePlugin } from "webpack";
import TerserJSPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import config from "./webpack.conf";

module.exports = merge(config, <Configuration>{
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
                	chunks: "all"
	        	}
	      	}
		},
		noEmitOnErrors: true,
		checkWasmTypes: true,
		minimize: true,
		minimizer: <unknown[]>[
			new TerserJSPlugin({}),
			new OptimizeCSSAssetsPlugin({})
		],
		runtimeChunk: {
      		name: "runtime"
    	}
	},
	plugins: [
		new DefinePlugin({ PRODUCTION: JSON.stringify(true) })
	]
});
