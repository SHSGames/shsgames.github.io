/* eslint @typescript-eslint/no-var-requires: off */
import React from "react";
import Photon from "photoncss";
import { Button, Snackbar } from "photoncss/lib/react";

const app: App = {

	static: (asset: string): string => require(`../../static/${asset}`).default,
	getRoute: (): string => location.protocol === "file:" ? location.href.split("#")[1] || "/" : location.pathname,

	api(path: string, data = {}): Promise<unknown> {
		return new Promise(function(resolve, reject) {
			fetch(`/api/${path}`, {
				method: "POST",
				mode: "cors",
				cache: "no-cache",
				credentials: "same-origin",
				headers: { "Content-Type": "application/json" },
				redirect: "follow",
				referrerPolicy: "no-referrer",
				body: JSON.stringify(data)
			})
			  .then(resp => resp.json())
			  .then(resolve)
			  .catch(reject);
		});
	},

	update(hash: string): void {
		async function click(): Promise<void> {
			const keys = await caches.keys();
			keys.map(async a => await caches.delete(a));
			location.reload();
		}

		Photon.Snackbar(
			<Snackbar>
				<p>An update is available. Build ID: <code>{hash}</code></p>
				<Button variant="flat" color="secondary" onClick={click}>update</Button>
			</Snackbar>
		);
	}

};

export default app;
