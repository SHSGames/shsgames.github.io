import { Toolbar, ToolbarActions, ToolbarTitle } from "photoncss/lib/react";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Component(): JSX.Element {
	return (
		<Toolbar>
			<ToolbarTitle>{ APP_MANIFEST.name }</ToolbarTitle>
			<ToolbarActions>
				<ThemeSwitcher/>
			</ToolbarActions>
		</Toolbar>
	);
}
