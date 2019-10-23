import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app";
import ROUTES from "./router";
import Mprogress from "../src/js/mprogress.min.js";
import Sidenav from "./components/Sidenav";
window.Mprogress = Mprogress;

service("games")()(games => app.games = games);
window.alert = message => console.warn(`Alert Halted: ${message}`);

import { v1 as uuid } from "uuid";
app.getCookie("x-storageapi") === undefined && app.setCookie("x-storageapi", uuid());

class App extends React.Component {
	routeChanged() {
		$(".router-reset").remove();

		Photon.disableArrowKeyScrolling = false;
		app.game && app.game.engine === "nes" && (nes = undefined);
		window.hasOwnProperty("audio_ctx") && window.audio_ctx.close();

		for (let route of ROUTES) {
			if(route.path === location.pathname) {
				if(route.hasOwnProperty("title")) {
					window.document.title = `${route.title} - ${app["NAME"]}`;
				} else {
					window.document.title = app["NAME"];
				}
			}
		}
	}

    render() {
		return (
			<div>
				<Router>
					<div>
						<Sidenav/>
						{ROUTES.map((v,i) => <Route key={i} exact={!v.hasOwnProperty("exact")} path={v.path} component={ () => {
							this.routeChanged();
							app.history = this.props.history;
							return new v.view();
						} }/>)}
					</div>
				</Router>
			</div>
		);
    }
}

render(<App />, window.document.getElementById("app"));
