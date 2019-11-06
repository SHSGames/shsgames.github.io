module.exports = SRC_DIR => [{
	test: /\.(txt|pem|md)$/,
	loader: "text-loader",
}, {
	test: /\.js?/,
	include: SRC_DIR,
	loader: "babel-loader",
	query: { presets: ["react", "es2015", "stage-2"] }
}, {
	test: /\.css/,
	loader: "style-loader!css-loader"
}, {
	test: /\.less$/,
	loader: "style-loader!css-loader!less-loader"
}, {
  	test: /\.(ttf|eot|woff|woff2)$/,
	loader: "file-loader",
	options: {
  		name: "fonts/[name].[ext]",
	},
}, {
	test: /\.(png|jp(e*)g|svg)$/,
	loader: "url-loader",
    options: {
        limit: 8000,
        name: "images/[hash]-[name].[ext]"
    }
}, {
	test: /\.json$/,
	loader: "json-loader"
}]
