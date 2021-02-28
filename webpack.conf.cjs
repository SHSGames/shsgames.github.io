const path = require("path");
const manifest = require("./src/manifest.json");
const { DefinePlugin } = require("webpack");
const OfflinePlugin = require("offline-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: [ "@babel/polyfill", "./src/index.js" ],
	output: {
		path: __dirname + "/public_html",
		filename: "app/[name].[contenthash].js"
	},
    module: {
        rules: [{
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
			use: [{ loader: MiniCssExtractPlugin.loader, options: { publicPath: "../" }}, "css-loader" ]
        }, {
			test: /\.less/i,
			use: [{ loader: MiniCssExtractPlugin.loader, options: { publicPath: "../" }}, "css-loader", "less-loader" ]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [{
				loader: "file-loader",
				options: { name: "static/[contenthash].[ext]" }
			}]
		}, {
			include: path.join(__dirname, "src/static"),
			use: [{
				loader: "file-loader",
				options: { name: "static/[contenthash].[ext]" }
			}]
		}, {
			test: /\.(txt|md|pem|raw)$/,
			use: [ "raw-loader" ]
		}]
    },

  	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "src/index.html",
			favicon: "src/static/icon.png",
			base: "/",
			templateParameters: {
				title: manifest.name,
				description: manifest.description
			}
		}),
		new MiniCssExtractPlugin({
			filename: "app/[name].[contenthash].css"
		}),
		new WebpackPwaManifest({
			filename: "manifest.json",
			...manifest
		}),
		new CopyWebpackPlugin({
      		patterns: [
        		{ from: "src/robots.txt", to: "." },
      		],
    	}),
		new DefinePlugin({ APP_MANIFEST: JSON.stringify(manifest) }),
		new OfflinePlugin(),
  	],

	resolve: {
		extensions: [".js"],
        alias: {
            "@photoncss": path.join(__dirname, "./node_modules/photoncss/modules"),
			"static": path.join(__dirname, "./src/static")
        }
    }
};
