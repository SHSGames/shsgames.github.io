import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "setimmediate";

import App from "./src/App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
