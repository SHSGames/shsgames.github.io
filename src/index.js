import React, { useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import "./styles/main.less";
import "script-loader!jquery";
import "photoncss";
import "./app";

// Register a static asset caching service-worker
if((location.protocol === "https:" || location.hostname === "localhost") && location.port === "" && "serviceWorker" in navigator) {
	navigator.serviceWorker.register("/service-worker.js");
}

// Get right router type for app
const Router = location.protocol === "file:" ? HashRouter : BrowserRouter;

// Import all views
const views = [];
const importAll = a => a.keys().forEach(k => views.push(a(k)));
importAll(require.context("./views", true, /\.js$/));

// Root component
function Root() {

	useEffect(function() {
		let route = app.getRoute();
		(function loop() {
			requestAnimationFrame(loop);
			if(route !== app.getRoute()) {
				route = app.getRoute();
				$(window).scrollTop(0);
				Photon.reload();
			}
		}());
	});

	return (
		<Router>
			<main>
				{ views.map(({ route, View, default: def }, key) => <Route key={key} path={route} exact={true} component={def || View}/> ) }
			</main>
		</Router>
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

if(location.hostname !== "localhost") {
	const client = require("raw-loader!../hash");
	fetch(`/hash`).then(resp => resp.text()).then(async server => {
		if(server.match(/([0-9]|[a-f]|[A-F]){8}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){12}/gmi)) {
			if(server !== client) {
				await (await caches.keys()).map(async a => await caches.delete(a));
			}
		}
	}).catch(e => console.error("Offline", e));
}
