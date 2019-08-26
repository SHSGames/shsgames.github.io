import JSEncrypt from "jsencrypt";
import LAST_BUILD from "../src/LAST_BUILD.txt";

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
		service === "games" && finished === false && Photon.toast(`<i class="material-icons red-text">error_outline</i><span>Could not refresh. Are you online?</span>`, 7500);
		mprogress.end();
	}, 15000)
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

$(() => $.ajax({
	url: "/src/LAST_BUILD.txt?" + Date.now(),
	success: data => data !== LAST_BUILD && app.update()
}));

global.app = {
	NAME: "SHS Games",
	service: `//${location.hostname}${PORT.backend}/service`,
	pubkey: "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC3Lblv+neygQC4vvG6qPARg39S\nVQHmGdoOcz6GIWoFdRt6yW5T5VSAPRpaVF9c1Qt19a7JsqhVRwLG5nnOmrmOAzy5\nk4DD9qAxrjnhpcJW4LyUWxGoaBxcvU2UBOgSrATQ2V/nrdySpMyi7RkBgubyOGdp\n+/eiknG6PnofX1vW+wIDAQAB\n-----END PUBLIC KEY-----",
	version: 1,
	game: null,
	games: null,
	state: {
		nesready: false
	},

	setDarkMode(mode) {
		if(mode === true) {
			$("body").addClass("theme-dark");
		} else {
			$("body").removeClass("theme-dark");
		}
	},

	slug(string) {
		string = string.replace(/\s/g,"-");
		string = string.replace(/\'/g,"");
		string = string.replace(/\./g,"");
		string = string.toLowerCase();
		return string;
	},

	update() {
		Photon.toast(`<i class="material-icons primary-text">system_update_alt</i><span>Updating</span>`, 2500);
		caches.delete("application-cache").then(() => {
			setTimeout(() => location.reload(), 1500);
		}).catch(e => console.error(e));
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
	},

	setCookie(cname, cvalue, seconds = 7 * 24 * 60 * 60) {
        let d = new Date();
        d.setTime(d.getTime() + (seconds * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },

    getCookie(name) {
        let value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

}

app.setDarkMode(localStorage.getItem("darkmode") === "true")
