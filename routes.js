const fs = require("fs");

const slug = string => {
	string = string.replace(/\s/g,"-");
	string = string.replace(/\'/g,"");
	string = string.toLowerCase();
	return string;
}

module.exports = app => {
	app.all("/service/gcp/:container/:image",(req,res) => {
		service("web/gcp")(req,res);
	});
	app.all("/sitemap",(req,res) => {
		let { groups } = service("games");
		let games = [];
		for (let group of groups) {
			for (let game of group.games) {
				games.push(game);
			}
		}

		let resp = [];
		for (let { name } of games) {
			resp.push(slug(name));
		}

		for (let sm of resp) {
			resp[resp.indexOf(sm)] = "https://shsgames.herokuapp.com/game/" + sm;
		}

		resp = resp.sort();
		resp = ["https://shsgames.herokuapp.com/","https://shsgames.herokuapp.com/request",...resp];

		res.end(resp.join("\n"));
	});
}
