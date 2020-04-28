// Import React
import React from "react";

// Import React Router
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
const Router = location.protocol === "file:" ? HashRouter : BrowserRouter;

let ROUTES = [];
const importAll = a => a.keys().forEach(k => ROUTES.push(a(k).default));
importAll(require.context("../views", true, /\.js$/));

const Root = () => (
	<Router>
		<main>
			{ ROUTES.map(({ route, View }, key) => <Route key={key} path={route} exact={true} component={View}/> ) }
		</main>
	</Router>
);

export default Root;
