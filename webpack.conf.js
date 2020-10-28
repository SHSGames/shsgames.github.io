const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AppManifestWebpackPlugin = require("app-manifest-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const manifest = require("./web-app.json");

module.exports = {
	entry: [ "@babel/polyfill", "./src/index.js" ],
	output: {
		path: __dirname + "/public_html",
		filename: "[hash].js"
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
			use: [ MiniCssExtractPlugin.loader, "css-loader" ]
        }, {
			test: /\.less/i,
			use: [ MiniCssExtractPlugin.loader, "css-loader", "less-loader" ]
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
    	new HtmlWebpackPlugin({
			meta: {
				"viewport": "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
				"mobile-web-app-capable": "yes",
				"msapplication-tap-highlight": "yes",
				"theme-color": manifest.config.theme_color,
				"description": manifest.config.appDescription,
			},
			base: manifest.config.start_url,
			title: manifest.config.appName,
			filename: manifest.config.spa_root,
			scriptLoading: "defer",
			minify: true,
			hash: true,
			xhtml: true
		}),
		new PreloadWebpackPlugin({
			rel: "preload",
    		as: "allAssets"
		}),
		new HtmlWebpackPartialsPlugin({
			path: path.join(__dirname, "./src/noscript.htm"),
			location: "body",
			priority: "high",
			template_filename: manifest.config.spa_root
		}),
		new MiniCssExtractPlugin({ filename: "[hash].css" }),
		new AppManifestWebpackPlugin(manifest),
		new CopyWebpackPlugin({
			patterns: [
				// { from: "src/ads.txt" },
				{ from: "src/robots.txt" },
				// { from: "src/sellers.json" },
				{ from: "src/serviceworker.js" }
			]
		}),
		new WorkboxPlugin.GenerateSW({
			importScripts: ["/serviceworker.js"],
			maximumFileSizeToCacheInBytes: 104857600,
	      	runtimeCaching: [{
	        	urlPattern: /\.(?:png|jpg|jpeg|svg|ico|woff2|js|css)$/,
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
