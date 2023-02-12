import { ElementType, StrictMode } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import { base } from "./manifest.json";
import ErrorBoundary from "./src/runtime/ErrorBoundry";
import "styles/main.less";
import "setimmediate";
import Drawer from "./src/components/Drawer";
import Toolbar from "./src/components/Toolbar";
import Footer from "./src/components/Footer";
import Keybinds from "./src/runtime/Keybinds";
import PWAInstaller from "./src/components/PWAInstaller";

if ("serviceWorker" in navigator && !/localhost/.test(window.location.toString())) registerSW({
	immediate: true
});

export const queryClient = new QueryClient;

export type Page = { default: ElementType, path: string, caseSensitive?: boolean };
const pages = import.meta.globEager<Page>("./src/pages/*.tsx");

// Log SHS GAMES!!
console.log(" _______           _______    _______  _______  _______  _______  _______ \n(  ____ \\|\\     /|(  ____ \\  (  ____ \\(  ___  )(       )(  ____ \\(  ____ \\\n| (    \\/| )   ( || (    \\/  | (    \\/| (   ) || () () || (    \\/| (    \\/\n| (_____ | (___) || (_____   | |      | (___) || || || || (__    | (_____ \n(_____  )|  ___  |(_____  )  | | ____ |  ___  || |(_)| ||  __)   (_____  )\n      ) || (   ) |      ) |  | | \\_  )| (   ) || |   | || (            ) |\n/\\____) || )   ( |/\\____) |  | (___) || )   ( || )   ( || (____/\\/\\____) |\n\\_______)|/     \\|\\_______)  (_______)|/     \\||/     \\|(_______/\\_______)");
console.log("%cJoin our cult at http://github.com/SHSGames/shsgames.github.io", "color: #1976d4");
console.log("%cHi, Evan!", "font-style: italic");

ReactDOM.render(
	<StrictMode>
		<ErrorBoundary>
			<QueryClientProvider client={ queryClient }>
				<BrowserRouter>
					<Toolbar/>
					<Drawer/>
					<Routes>
						{ Object.values(pages).map((page, key) => <Route
							key={ key }
							path={ base + page.path.substring(1) }
							caseSensitive={ page.caseSensitive || false }
							element={ <page.default/> }/>
						) }
					</Routes>
					<Footer/>
					<PWAInstaller/>
					<Keybinds/>
				</BrowserRouter>
				{ !PRODUCTION && <ReactQueryDevtools/> }
			</QueryClientProvider>
		</ErrorBoundary>
	</StrictMode>,
	document.getElementById("root")
);
