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
