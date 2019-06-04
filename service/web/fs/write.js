const fs = require("fs");

module.exports = (req,res) => {
	service("webservice")(req,res)((params, cookies) => {
		service("gcloud")(bucket => {
			fs.mkdir(`${__appdir}/userdata/${cookies["x-storageapi"]}`, function() {
				fs.writeFile(`${__appdir}/userdata/${cookies["x-storageapi"]}/${params.file}`, params.content, function(){
					bucket.upload(`${__appdir}/userdata/${cookies["x-storageapi"]}/${params.file}`, {
						destination: `/userdata/${cookies["x-storageapi"]}/${params.file}`,
						metadata: { cacheControl: "max-age=0" }
					}).then(() => {
						fs.unlink(`${__appdir}/userdata/${cookies["x-storageapi"]}/${params.file}`,() => res.end());
					});
				});
			});
		});
	});
}
