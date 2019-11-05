module.exports = SRC_DIR => [{
	test: /\.(txt|pem|md)$/,
	loader: "text-loader",
}, {
	test: /\.js?/,
	include: SRC_DIR,
	loader: "babel-loader",
	query: { presets: ["react", "es2015", "stage-2"] }
}, {
	test: /\.less$/,
	loader: "style-loader!css-loader!less-loader"
}, {
	test: /\.json$/,
	loader: "json-loader"
}]
