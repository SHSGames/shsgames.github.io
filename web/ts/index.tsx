import React from "react";
import { render } from "react-dom";
import Runtime from "./runtime/Runtime";

// Import scripts
import "script-loader!jquery";
import "./runtime/util/offlineInstaller";

// Import stylesheets
import "photoncss/dist/photon.css";
import "../../styles/main.less";
import ErrorBoundry from "./runtime/ErrorBoundry";

// Import all views
const views: View[] = [];
const importAll = (c: __WebpackModuleApi.RequireContext): void => c.keys().forEach(m => views.push(c(m)));
importAll(require.context("./views", true, /\.js$/));

// Wait for the DOM to load before rendering
document.addEventListener("DOMContentLoaded", function() {

	// Append a container to the DOM to render content into
	const root = document.createElement("DIV");
	root.id = "root";
	document.body.append(root);

	// Log SHS GAMES!!
	console.log(" _______           _______    _______  _______  _______  _______  _______ \n(  ____ \\|\\     /|(  ____ \\  (  ____ \\(  ___  )(       )(  ____ \\(  ____ \\\n| (    \\/| )   ( || (    \\/  | (    \\/| (   ) || () () || (    \\/| (    \\/\n| (_____ | (___) || (_____   | |      | (___) || || || || (__    | (_____ \n(_____  )|  ___  |(_____  )  | | ____ |  ___  || |(_)| ||  __)   (_____  )\n      ) || (   ) |      ) |  | | \\_  )| (   ) || |   | || (            ) |\n/\\____) || )   ( |/\\____) |  | (___) || )   ( || )   ( || (____/\\/\\____) |\n\\_______)|/     \\|\\_______)  (_______)|/     \\||/     \\|(_______/\\_______)");
	console.log("%cJoin our cult at http://github.com/SHSGames/shsgames.github.io", "color: #1976d4");
	console.log("%cHi, Evan!", "font-style: italic");

	// Render root component into react-root container
	render(
		<ErrorBoundry>
			<Runtime views={views}/>
		</ErrorBoundry>,
		document.getElementById("root"));

});
