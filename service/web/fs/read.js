const request = require("request");

module.exports = (req,res) => {
	service("webservice")(req,res)((params, cookies) => {
		request(`https://storage.googleapis.com/shsgames_storage/userdata/${cookies["x-storageapi"]}/${params.file}`, function(_,_,resp) {
			res.end(resp)
		});
	});
}
