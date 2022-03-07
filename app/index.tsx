import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./src/App";

import { registerSW } from "virtual:pwa-register";
if ("serviceWorker" in navigator && !/localhost/.test(window.location.toString())) registerSW({
	immediate: true
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
