import React, { useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
import "../styles/main.less";
import "script-loader!jquery";
import { ThemeProvider } from "photoncss/react";    // Import Photon in to the project
import "photoncss/dist/photon.css";                 // Import the Photon stylesheet
import app from "./app";
import $ from "jquery";

// Get right router type for app
const Router = location.protocol === "file:" ? HashRouter : BrowserRouter;

// Import all views
const views: { route: string; View: JSX.Element; title?: string; default: JSX.Element }[] = [];
const importAll = (a: __WebpackModuleApi.RequireContext): void => a.keys().forEach((k: string) => views.push(a(k)));
importAll(require.context("./views", true, /\.js$/));

// Root component
function Root(): JSX.Element {

	// On mount
	useEffect(function() {

		// Initialize route
		let route = "";
		(function loop(): void {

			// Run again on next fraome
			requestAnimationFrame(loop);

			// If route/page was changed
			if(route !== app.getRoute()) {

				// Change route cache
				route = app.getRoute();

				// Reset scroll
				$(window).scrollTop(0);

				// Get view
				const _view = views.filter(({ route }) => new RegExp(route.replace(/:\w.*/g, "\\w.*"), "g").test(app.getRoute()));
				const view = _view.length > 1 ? _view[_view[0].route === "/" ? 1:0] : _view[0];

				// Get title from route
				const title = view?.title !== undefined ? `${view.title} • ${APP_MANIFEST.name}` : APP_MANIFEST.name;

				// Set new title
				document.title = title;

			}
		}());
	});

	// Render router
	return (
		<ThemeProvider global>
			<Router>
				<main>
					{ views.map(({ route, View, default: def }, key) => <Route key={key} path={route} exact={true} component={def || View}/> ) }
				</main>
			</Router>
		</ThemeProvider>
	);

}

// Wait for the DOM to load before rendering
document.addEventListener("DOMContentLoaded", function() {

	// Append a container to the DOM to render content into
	const root = document.createElement("DIV");
	root.id = "root";
	document.body.append(root);

	// Render root component into react-root container
	render(<Root/>, document.getElementById("root"));

});

// If is running in production
if(PRODUCTION) {

	// Register a static asset caching service-worker
	OfflinePluginRuntime.install();

	// Get client version
	/* eslint @typescript-eslint/no-var-requires: 0 */
	const client = require("raw-loader!../../hash").default;

	// Get server version
	(function update(): void {

		fetch(`/hash?${Date.now()}`).then(resp => resp.text()).then(async server => {

			// Make sure client recieved a hash
			if(server.match(/([0-9]|[a-f]|[A-F]){8}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){12}/gmi)) {

				// Update the client
				if(server !== client) app.update(server.substr(0, 8));

				// If there is no update available, retry in 60s
				else setTimeout(update, 60000);

			}

		});

	}());

}
