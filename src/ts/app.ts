import Photon from "photoncss";

// Initialize app
const app = {

	// Resolve assets from the static folder
	/* eslint @typescript-eslint/no-var-requires: 0 */
	static: (asset: string): string => require(`../static/${asset}`).default,

	// Get current route
	getRoute: (): string => location.protocol === "file:" ? location.href.split("#")[1] || "/" : location.pathname,

	// Add API request system
	api: (path: string, data = {}): Promise<unknown> => new Promise(function(resolve, reject) {
		fetch(`/api/${path}`, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: { "Content-Type":"application/json" },
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify(data)
		}).then(resp => resp.json()).then(resolve).catch(reject) ;
	}),

	// Add method to clear cache and update
	update: async (hash: string): Promise<void> => {
		Photon.Snackbar({
			content: `An update is available. Build ID: <code>${hash}</code>`,
			action: {
				name: "update",
				async click(): Promise<void> {
					const keys = await caches.keys();
					keys.map(async a => await caches.delete(a));
					location.reload();
				}
			},
			duration: 1e10
		});
	}

};

export default app;
