import { ElementType, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "styles/index.less";
import { registerSW } from "virtual:pwa-register";
import Waves from "../photoncss/src/ts/util/Waves";
import { base } from "./manifest.json";
import AuthProvider from "./src/components/auth/AuthProvider";
import Container from "./src/components/Container";
import Drawer from "./src/components/Drawer";
import Error404 from "./src/components/Error404";
import Footer from "./src/components/Footer";
import AddGame from "./src/components/AddGame";
import ErrorBoundary from "./src/runtime/ErrorBoundry";
import GunProvider from "./src/runtime/GunContext";

if ("serviceWorker" in navigator && !/localhost/.test(window.location.toString())) registerSW({
	immediate: true
});

export type Page = { default: ElementType, path: string, caseSensitive?: boolean };
const pages = import.meta.globEager<Page>("./src/pages/*.tsx");

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ErrorBoundary>
			<GunProvider>
				<AuthProvider/>
				<div className="bg-gray-200 dark:bg-zinc-800 w-full dark:text-white">
					<BrowserRouter>
						<Drawer/>
						<div className="xl:ml-[300px]">
							<Container>
								<AddGame/>
								<Routes>
									{ Object.values(pages).map((page, key) => <Route
										key={ key }
										path={ base + page.path.substring(1) }
										caseSensitive={ page.caseSensitive || false }
										element={ <page.default/> }/>
									) }
									<Route path="*" element={<Error404/>}/>
								</Routes>
							</Container>
							<Footer/>
						</div>
					</BrowserRouter>
				</div>
			</GunProvider>
		</ErrorBoundary>
	</StrictMode>
);

Waves.init();
