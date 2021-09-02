import compression from "compression";

// Export middleware
export default compression({
	filter: (req) => !req.query.hasOwnProperty("decompressed") && req.header("use-gzip") !== "false",
	level: 8
});
