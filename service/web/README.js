const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
	fs.readFile(path.join(__appdir, "README.md"), "utf8", (err, readme) => {
		res.send(readme);
	})
}
