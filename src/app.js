// Initialize app
global.app = {};

// Resolve assets from the static folder
app.static = asset => require(`./static/${asset}`).default;

// Get current route
app.getRoute = () => location.protocol === "file:" ? (location.href.split("#")[1] || "/") : location.pathname;

// Add API request system
app.api = (path, data = {}) => new Promise(function(resolve, reject) {
	fetch(`/api/${path}`, {
		method: "POST",
		mode: "cors",
	    cache: "no-cache",
	    credentials: "same-origin",
	    headers: { "Content-Type": "application/json" },
	    redirect: "follow",
	    referrerPolicy: "no-referrer",
		body: JSON.stringify(data)
	}).then(resp => resp.json())
	  .then(resolve)
	  .catch(reject);
});

// Add method to clear cache and update
app.update = async hash => {
	Photon.Snackbar({
		content: `An update is available. Build ID: <code>${hash}</code>`,
		action: {
			name: "update",
			async click() {
				await (await caches.keys()).map(async a => await caches.delete(a));
				location.reload();
			}
		},
		duration: 1e10
	});
}
