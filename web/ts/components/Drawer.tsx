import { Drawer, ListSubheader } from "photoncss/lib/react";
import React from "react";
import { getGameID, slug } from "../src/gameHash";
import games, { Game } from "../../games";
import app from "../src/app";
import { DrawerEntry } from "./DrawerEntry";

export default function Component(): JSX.Element {
	return (
		<Drawer id="drawer">
			<img src={ app.static("icon.png") } alt="" style={{ width: "50%", display: "block", margin: "2rem auto" }}/>
			<hr/>
			<DrawerEntry to="/" icon="home">Home</DrawerEntry>
			<hr/>
			<ListSubheader>Games <span className="badge" style={{ marginLeft: 16, fontSize: 12, padding: "0px 8px" }}>{ games.length } Games</span></ListSubheader>
			{ games
				.sort((a: Game, b: Game) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)
				.map((game: Game, key) => <DrawerEntry key={key} to={`/g/${getGameID(game)}/${slug(game.name)}`} icon="sports_esports">{game.name}</DrawerEntry>)}
		</Drawer>
	);
}
