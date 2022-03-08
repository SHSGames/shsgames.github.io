import { ElementType, StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import ErrorBoundary from "./src/runtime/ErrorBoundry";
import "./styles/index.css";

if ("serviceWorker" in navigator && !/localhost/.test(window.location.toString())) registerSW({
	immediate: true
});

export type Page = { default: ElementType, path: string, caseSensitive?: boolean };
const pages = import.meta.globEager<Page>("./src/pages/*.tsx");

ReactDOM.render(
	<StrictMode>
		<ErrorBoundary>
			<BrowserRouter>
				<Routes>
					{ Object.values(pages).map((page, key) => <Route
						key={ key }
						path={ page.path }
						caseSensitive={ page.caseSensitive || false }
						element={ <page.default/> }/>
					) }
				</Routes>
			</BrowserRouter>
		</ErrorBoundary>
	</StrictMode>,
	document.getElementById("root")
);
