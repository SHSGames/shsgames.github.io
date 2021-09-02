const JSEncrypt = require("node-jsencrypt");
const formidable = require("formidable");

module.exports = (req,res) => data => {

	let form = new formidable.IncomingForm();
	form.parse(req, function(err, { din }, files) {

		din = din.split(":");

		let decrypt = new JSEncrypt();
        decrypt.setPrivateKey(privkey);

		for (let part of din) {
			din[din.indexOf(part)] = decrypt.decrypt(part);
		}

		din = din.join();
		din = decodeURIComponent(Buffer.from(din, "base64").toString());

		fields = JSON.parse(din);

		let cookies = null;
		if("cookie" in fields) {
			cookies = {};
			for (let cookie of fields.cookie.split("; ")) {
				cookies[cookie.split("=")[0]] = cookie.split("=")[1];
			};
		}

		req.cookie !== undefined && (cookies = req.cookie);
		data({...fields,...files},cookies);

	});
}
