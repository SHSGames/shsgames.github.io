/* eslint @typescript-eslint/no-var-requires: 0 */
import app from "src/app";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

// Get client version
export const client: string = require("raw-loader!../../../../../hash").default;

// Ensure app is in production mode
if (PRODUCTION) {

	// Register a static asset caching service-worker
	OfflinePluginRuntime.install();

	// Get server version
	(function update(): void {

		fetch(`/hash?${Date.now()}`)
			.then(resp => resp.text())
			.then(server => {

				// Make sure client recieved a hash
				if (server.match(/([0-9]|[a-f]|[A-F]){8}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){12}/gmi)) {

					// Update the client
					if (server !== client) app.update(server.substr(0, 8));

					// If there is no update available, retry in 60s
					else setTimeout(update, 60000);

				}

			});

	}());

}
