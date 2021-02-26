const path = require("path");
const manifest = require("./src/manifest.json");
const OfflinePlugin = require("offline-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: [ "@babel/polyfill", "./src/index.js" ],
	output: {
		path: __dirname + "/public_html",
		filename: "static/[hash].js"
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
			use: [{
			    loader: MiniCssExtractPlugin.loader,
			    options: {
			         publicPath: "../"
			    }
			}, "css-loader" ]
        }, {
			test: /\.less/i,
			use: [{
			    loader: MiniCssExtractPlugin.loader,
			    options: {
			         publicPath: "../"
			    }
			}, "css-loader", "less-loader" ]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [{
				loader: "file-loader",
				options: { name: "static/[hash].[ext]" }
			}]
		}, {
			include: path.join(__dirname, "src/static"),
			use: [{
				loader: "file-loader",
				options: { name: "static/[hash].[ext]" }
			}]
		}, {
			test: /\.(txt|md|pem|raw)$/,
			use: [ "raw-loader" ]
		}]
    },

  	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ title: manifest.name, template: "src/index.html", favicon: "src/static/icon.png", base: "/" }),
		new MiniCssExtractPlugin({ filename: "static/[hash].css" }),
		new WebpackPwaManifest({ filename: "manifest.json", ...manifest }),
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
