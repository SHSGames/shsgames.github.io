import React, { ReactNode } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";

type Props = { children: ReactNode };
export default function Router({ children }: Props): JSX.Element {
	if (location.protocol === "file:") return <HashRouter>{ children }</HashRouter>;
	return <BrowserRouter>{ children }</BrowserRouter>;
}
