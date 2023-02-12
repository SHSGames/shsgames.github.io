import React from "react";
import { ListItem, TextIcon } from "photoncss/lib/react";
import { Game } from "../../games";

export type Props = { item: Game };

export default function Result({ item }: Props): JSX.Element {
	return (
		<ListItem className="search-result">
			<TextIcon variant="outlined">sports_esports</TextIcon>
			{ item.name }
		</ListItem>
	);
}
