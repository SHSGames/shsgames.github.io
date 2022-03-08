import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import ErrorBoundary from "./src/runtime/ErrorBoundry";
import "./styles/index.css";

import { registerSW } from "virtual:pwa-register";
if ("serviceWorker" in navigator && !/localhost/.test(window.location.toString())) registerSW({
	immediate: true
});

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById("root")
);
