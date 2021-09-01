/* eslint @typescript-eslint/no-var-requires: off */
import path from "path";
import { Configuration, DefinePlugin } from "webpack";
import OfflinePlugin from "offline-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import WebpackPwaManifest, { ManifestOptions } from "webpack-pwa-manifest";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import manifest from "./web/manifest";

export = <Configuration>{
	entry: [ "./web/__compile_cache/ts/index.js" ],
	output: {
		path: path.resolve("public_html/"),
		filename: "app/[name].[contenthash].js"
	},
	module: {
		rules: [ {
			test: /\.js$/,
			use: {
				loader: "babel-loader",
				options: {
					compact: true,
					presets: [ "@babel/preset-react", "@babel/preset-env" ],
					plugins: [ "@babel/plugin-proposal-class-properties" ]
				}
			}
		}, {
			test: /\.css/i,
			use: [ {
				loader: MiniCssExtractPlugin.loader,
				options: {
					publicPath: "../"
				}
			},
			"css-loader"
			]
		}, {
			test: /\.less/i,
			use: [ {
				loader: MiniCssExtractPlugin.loader,
				options: {
					publicPath: "../"
				}
			},
			"css-loader",
			{
				loader: "less-loader",
				options: {
					lessOptions: {
						rewriteUrls: "local"
					}
				}
			} ]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [ {
				loader: "file-loader",
				options: {
					name: "static/[contenthash].[ext]"
				}
			} ]
		}, {
			include: path.resolve("web/static"),
			use: [ {
				loader: "file-loader",
				options: {
					name: "static/[contenthash].[ext]"
				}
			} ]
		}, {
			test: /\.(txt|md|pem|raw)$/,
			use: [ "raw-loader" ]
		} ]
	},

	plugins: [
		new CleanWebpackPlugin,
		new HtmlWebpackPlugin({
			template: "web/index.html",
			favicon: "web/static/icon.png",
			base: "/",
			templateParameters: {
				title: manifest.name,
				description: manifest.description
			}
		}),
		new MiniCssExtractPlugin({
			filename: "app/[name].[contenthash].css"
		}),
		new WebpackPwaManifest(<ManifestOptions>{
			filename: "manifest.json",
			...manifest
		}),
		new CopyWebpackPlugin({
			patterns: [ {
				from: "web/robots.txt", to: "."
			} ]
		}),
		new DefinePlugin({
			APP_MANIFEST: JSON.stringify(manifest)
		}),
		new OfflinePlugin
	],

	resolve: {
		extensions: [ ".js" ],
		roots: [
			path.resolve("./"),
			path.resolve("./node_modules"),
			path.resolve("./web/__compile_cache/ts")
		],
		alias: {
			"static": path.resolve("./web/static"),
			"views": path.resolve("./web/__compile_cache/ts/views"),
			"components": path.resolve("./web/__compile_cache/ts/components")
		}
	}
};
