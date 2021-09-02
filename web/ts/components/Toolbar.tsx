import { Icon, Toolbar, ToolbarActions, ToolbarTitle } from "photoncss/lib/react";
import Photon from "photoncss";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Component(): JSX.Element {
	return (
		<Toolbar>
			<Icon onClick={ () => Photon.Drawer("#drawer").open() }>menu</Icon>
			<ToolbarTitle>{ APP_MANIFEST.name }</ToolbarTitle>
			<ToolbarActions>
				<ThemeSwitcher/>
			</ToolbarActions>
		</Toolbar>
	);
}
