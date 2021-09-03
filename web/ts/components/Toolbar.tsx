import Photon from "photoncss";
import { Icon, Toolbar, ToolbarActions, ToolbarTitle } from "photoncss/lib/react";
import React from "react";
import SearchBar from "./SearchBar";
import { SearchToggleButton } from "./SearchToggleButton";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Component(): JSX.Element {
	return (
		<Toolbar>
			<Icon onClick={ () => Photon.Drawer("#drawer").open() }>menu</Icon>
			<ToolbarTitle>{ APP_MANIFEST.name }</ToolbarTitle>
			<SearchBar/>
			<ToolbarActions>
				<SearchToggleButton/>
				<ThemeSwitcher/>
			</ToolbarActions>
		</Toolbar>
	);
}
