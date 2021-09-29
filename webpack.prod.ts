/* eslint camelcase: off */
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
                	name: "node",
                	enforce: true,
                	chunks: "all"
	        	}
	      	}
		},
		noEmitOnErrors: true,
		checkWasmTypes: true,
		minimize: true,
		minimizer: <unknown[]>[
			new TerserJSPlugin({
				extractComments: false,
				terserOptions: {
					compress: {
						arguments: true,
						booleans_as_integers: true,
						collapse_vars: true,
						comparisons: true,
						keep_fargs: false,
						keep_fnames: false
					},
					ecma: 5,
					ie8: false,
					mangle: true,
					keep_classnames: false,
					keep_fnames: false,
					output: {
						comments: false,
						quote_keys: false
					}
				}
			}),
			new OptimizeCSSAssetsPlugin({})
		],
		runtimeChunk: {
      		name: "webpack"
    	}
	},
	plugins: [
		new DefinePlugin({ PRODUCTION: JSON.stringify(true) })
	]
});
