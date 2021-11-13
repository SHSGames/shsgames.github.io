import React from "react";
import { render } from "react-dom";
import PWAInstaller from "pwa-installer-react";
import Runtime from "runtime/Runtime";

// Import scripts
import "script-loader!jquery";
import "./runtime/util/offlineInstaller";

// Import stylesheets
import "photoncss/dist/photon.css";
import "../../styles/main.less";
import Photon from "photoncss";
import ErrorBoundry from "./runtime/ErrorBoundry";
import { Button, Dialog, DialogActions, DialogBody, DialogTitle } from "photoncss/lib/react";

// Import all views
const views: View[] = [];
const importAll = (c: __WebpackModuleApi.RequireContext): void => c.keys().forEach(m => views.push(c(m)));
importAll(require.context("./views", true, /\.js$/));

// Wait for the DOM to load before rendering
document.addEventListener("DOMContentLoaded", function() {

	// When a key is pressed, hide the cursor
	$(document).on("keydown", () => $("#game-renderer").addClass("no-cursor"));

	// When the mouse is moved, showo cursor
	$(document).on("mousemove", () => $("#game-renderer").removeClass("no-cursor"));

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
			<PWAInstaller/>
		</ErrorBoundry>,
		document.getElementById("root"));

	if (localStorage.getItem("update_v3.15") !== "true") {
		setTimeout(() => {
			const dialog = Photon.Dialog(<Dialog>
				<DialogTitle seperated={true}>Whats new in v3.15 (11/05)</DialogTitle>
				<DialogBody>
					<b>Flash is back!</b>
					<br /><br />
					<p>We implemented a flash emulator to run your favorite flash games. The games take a lot of effort to recompile but we're about 40% done so far. That being said, be sure to report any issues you encounter on our <a style={{ color: "var(--palette_primary_normal)" }} href="//github.com/SHSGames/shsgames.github.io/issues">issue tracker</a>.</p>
				</DialogBody>
				<DialogActions seperated={true}>
					<Button color="primary" variant="flat" onClick={ () => dialog.close() }>OK</Button>
				</DialogActions>
			</Dialog>).open();
			localStorage.setItem("update_v3.15", "true");
		}, 2000);
	}

});
