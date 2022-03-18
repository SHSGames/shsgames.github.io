import React from "react";
import { Card, List } from "photoncss/lib/react";
import games from "../../games";
import Result from "./SearchResult";
import { getGameID, slug } from "../util/gameHash";
import { Link } from "react-router-dom";

export type Props = { term: string };

export default function SearchResult({ term }: Props): JSX.Element {

	const filtered = games.filter(game => game.name.toLowerCase().includes(term.toLowerCase()));

	return (
		<div className="search-results" style={{ display: "none", borderRadius: 4 }}>
			<Card style={{ margin: 0, marginTop: -76 }} variant="outlined">
				<div style={{ height: 48 }}></div>
				<p style={{ textAlign: "right", paddingTop: 12 }}>
					<span className="badge">{filtered.length} Game{filtered.length !== 1 && "s"}</span>
				</p>
				<List className="search-results-list">
					{ filtered.map((item, key) =>
						<Link key={key} to={`/g/${getGameID(item)}/${slug(item.name)}${location.search}`} onClick={ () => $(".search-results").hide() }>
							<Result item={item}/>
						</Link>
					) }
				</List>
			</Card>
		</div>
	);
}
