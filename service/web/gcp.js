const request = require("request");

module.exports = (req, res) => {
	const { container, image } = req.params;
	req.pipe(request(`http://storage.googleapis.com/shsgames_storage/games/${container}/${image}`)).pipe(res)
}
