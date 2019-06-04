import JSEncrypt from "jsencrypt";

global.PORT = {
    frontend: parseInt(location.port || 80),
    backend: parseInt(location.port || 80) === 8080 ? ":9000" : ""
};

global.service = service => data => done => {

	let mprogress = new Mprogress();
	mprogress.start();

	let sparse = din => {
		din = JSON.stringify(din);
		din = encodeURIComponent(din);
		din = window.btoa(din);
		din = din.match(/.{1,32}/g);

		let encrypt = new JSEncrypt();
        encrypt.setPublicKey(app.pubkey);

		for (let part of din) {
			din[din.indexOf(part)] = encrypt.encrypt(part);
		}

		din = din.join(":")
		return { din };
	}

	let finished = false;

	$.ajax({
		type: "POST",
		url: `${app.service}/${service}`,
		data: sparse({
			...data,
			...{ cookie: document.cookie }
		}),
		success(args) {
			finished = true;
			mprogress.end();
			done(args);
		}
	});

	setTimeout(() => {
		finished === false && app.offlineMode();
		mprogress.end();
	}, 3000)
}

let spin = function(){
	setTimeout(() => {
		$(".photon-dialog.active").children(".dialog").append(`<div id="dialog-spinner"><div class="spinner-wrapper"><svg class="spinner rainbow"><circle cx="50" cy="50" r="20"></circle></svg></div></div>`);
		requestAnimationFrame(() => $("#dialog-spinner").addClass("active"));
	},250);
}
let nospin = function(){
	$("#dialog-spinner").removeClass("active");
	setTimeout(() => $("#dialog-spinner").remove(),250);
}

global.app = {
	NAME: "SHS Games",
	service: `//${location.hostname}${PORT.backend}/service`,
	pubkey: "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC3Lblv+neygQC4vvG6qPARg39S\nVQHmGdoOcz6GIWoFdRt6yW5T5VSAPRpaVF9c1Qt19a7JsqhVRwLG5nnOmrmOAzy5\nk4DD9qAxrjnhpcJW4LyUWxGoaBxcvU2UBOgSrATQ2V/nrdySpMyi7RkBgubyOGdp\n+/eiknG6PnofX1vW+wIDAQAB\n-----END PUBLIC KEY-----",

	game: null,
	games: null,
	state: {
		offline: false,
		nesready: false
	},

	offlineMode() {
		Photon.toast(`<i class="material-icons deep-orange-text">warning</i><span>You'r offline. Entering offline mode.</span>`,3000);
		const games = JSON.parse(localStorage.getItem("offline-games") || "[]");
		app.games = { groups: [{ name: "Saved", games }]}
		app.state.offline = true;
	},

	slug(string) {
		string = string.replace(/\s/g,"-");
		string = string.replace(/\'/g,"");
		string = string.replace(/\./g,"");
		string = string.toLowerCase();
		return string;
	},

	launch(game,redirector) {
		const path = app.slug(game.name);
		if(localStorage.getItem("hidewarn") !== "true"){
			let dialog = new Photon.dialog({
				type:"alert",
				title:"Warning",
				transition: "grow",
				message:"This game might make sound. If you\'re undercover, make sure your computer is on mute.",
				actions: [{
					name:"don't show again",
					role: "primary",
					click() {
						localStorage.setItem("hidewarn","true");
						setTimeout(() => {
							redirector.setState({ redirect: `/game/${path}` });
							dialog.destroy();
						},250);
					}
				},
				{
					name:"proceed",
					click() {
						redirector.setState({ redirect: `/game/${path}` });
						dialog.destroy();
					}
				},
				{
					name:"cancel",
					click() {
						dialog.destroy();
					}
				}]
			});

			dialog.open();
		} else {
			redirector.setState({ redirect: `/game/${path}` });
		}
	}

}
