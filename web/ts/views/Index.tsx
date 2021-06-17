import ThemeSwitch from "../components/ThemeSwitch";
import React from "react";

export const route = "/";

export default function View(): JSX.Element {
	return (
		<>
			<ThemeSwitch/>
			<p>get started by editing `~/my-app/src/ts/views/Index.tsx::View`</p>
		</>
	);
}
