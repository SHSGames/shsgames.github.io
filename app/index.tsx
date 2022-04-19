import { ElementType, StrictMode } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import { base } from "./manifest.json";
import ErrorBoundary from "./src/runtime/ErrorBoundry";
import "./styles/index.css";

if ("serviceWorker" in navigator && !/localhost/.test(window.location.toString())) registerSW({
	immediate: true
});

export const queryClient = new QueryClient;

export type Page = { default: ElementType, path: string, caseSensitive?: boolean };
const pages = import.meta.globEager<Page>("./src/pages/*.tsx");

ReactDOM.render(
	<StrictMode>
		<ErrorBoundary>
			<QueryClientProvider client={ queryClient }>
				<BrowserRouter>
					<Routes>
						{ Object.values(pages).map((page, key) => <Route
							key={ key }
							path={ base + page.path.substring(1) }
							caseSensitive={ page.caseSensitive || false }
							element={ <page.default/> }/>
						) }
					</Routes>
				</BrowserRouter>
				{ !PRODUCTION && <ReactQueryDevtools/> }
			</QueryClientProvider>
		</ErrorBoundary>
	</StrictMode>,
	document.getElementById("root")
);
