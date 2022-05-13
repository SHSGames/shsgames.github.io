import Photon from "photoncss";
import { Icon, Toolbar, ToolbarActions, ToolbarTitle } from "photoncss/lib/react";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { SearchToggleButton } from "./SearchToggleButton";
import ThemeSwitcher from "./ThemeSwitcher";
import { base } from "../../manifest.json"

export default function Component(): JSX.Element {
	return (
		<Toolbar>
			<Icon onClick={ () => Photon.Drawer("#drawer").open() }>menu</Icon>
			<ToolbarTitle>
				<Link to={`${base}${location.search}`}>
					{ APP_MANIFEST.name }
				</Link>
			</ToolbarTitle>
			<SearchBar/>
			<ToolbarActions>
				<SearchToggleButton/>
				<ThemeSwitcher/>
			</ToolbarActions>
		</Toolbar>
	);
}
