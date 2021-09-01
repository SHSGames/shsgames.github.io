/* eslint @typescript-eslint/no-var-requires: off */
import React from "react";
import Photon from "photoncss";
import { Button, Snackbar } from "photoncss/lib/react";

const app = {

	static(asset: string): string {
		return require(`../../../static/${asset}`).default;
	},

	getRoute(): string {
		return location.protocol === "file:" ? location.href.split("#")[1] || "/" : location.pathname;
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
				<Button
					variant="flat"
					color="primary"
					onClick={click}>update</Button>
			</Snackbar>
		);
	}

};

export default app;
