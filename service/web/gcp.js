const fs = require("fs");
const path = require("path");
const request = require("request-promise");

module.exports = (req, res) => {
	const { container, image } = req.params;
	const CACHE = path.join(__appdir, "cached_resources", `${container}_${image}`);

	(function attempt() {
		fs.exists(CACHE, exists => {
			if(exists) {
				fs.createReadStream(CACHE).pipe(res);
			} else {
				request.get(`http://storage.googleapis.com/shsgames_v2/${container}/${image}`, { encoding: null }).then(res => {
    				const buf = Buffer.from(res, "utf8");
    				fs.writeFile(CACHE, buf, attempt);
  				}, err => {
					if(err) {
						fs.unlink(CACHE, attempt);
					} else attempt();
				});
			}
		})
	}());
}
