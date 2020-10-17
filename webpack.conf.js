const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AppManifestWebpackPlugin = require("app-manifest-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const manifest = require("./web-app.json");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/public_html",
		filename: "app.js"
	},
    module: {
        rules: [
			{
	            test: /\.js$/,
	            use: {
	                loader: "babel-loader",
	                options: {
	                    presets: [ "@babel/preset-react", "@babel/preset-env" ],
						plugins: [ "@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime" ]
	                }
	            }
	        }, {
				test: /\.css/i,
				use: [ MiniCssExtractPlugin.loader, "css-loader" ]
	        }, {
				test: /\.less/i,
				use: [ MiniCssExtractPlugin.loader, "css-loader", "less-loader" ]
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
			}
		]
    },

  	plugins: [
		new CleanWebpackPlugin(),
    	new HtmlWebpackPlugin({
			meta: {
				"viewport": "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0",
				"theme-color": manifest.config.theme_color,
				"description": manifest.config.appDescription
			},
			lang: "en_US",
			base: manifest.config.start_url,
			title: manifest.config.appName,
			filename: manifest.config.spa_root,
			scriptLoading: "defer",
			minify: true,
			hash: true,
			xhtml: true
		}),
		new HtmlWebpackPartialsPlugin({
			path: path.join(__dirname, "./src/noscript.htm"),
			location: "body",
			priority: "high",
			template_filename: manifest.config.spa_root
		}),
		new MiniCssExtractPlugin({ filename: "app.css" }),
		new AppManifestWebpackPlugin(manifest),
		new CopyWebpackPlugin({
			patterns: [{ from: "src/robots.txt" }]
		}),
		new WorkboxPlugin.GenerateSW({
	      	runtimeCaching: [{
	        	urlPattern: /\.(?:png|jpg|jpeg|svg|ico|woff2)$/,
	        	handler: "CacheFirst",
	        	options: {
	          		cacheName: "static",
	        	}
	      	}]
	    })
  	],

	resolve: {
		extensions: [".js"],
        alias: {
            "@photoncss": path.join(__dirname, "./node_modules/photoncss/modules"),
			"components": path.join(__dirname, "./src/components"),
			"static": path.join(__dirname, "./src/static")
        }
    }
};
