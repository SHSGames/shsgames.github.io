import qs from "qs";
import { useEffect } from "react";
import ghash from "../util/hash";
import GameBoy from "./Emulater/GameBoy";

export default function GameRunner(): JSX.Element {

	const { game, hash } = qs.parse(location.search.substring(1));
	const matches = ghash(atob(game!.toString()), 36) === hash;
	const parsed: Games.Game = JSON.parse(atob(game!.toString()));
	const ext = parsed.executable.split(".").pop();
	const fullgame = { ...parsed,
		id: ghash(parsed.name).toString(),
		hash: hash?.toString(),
		signed: matches.toString(),
		ext
	} as Games.FullGame;

	if (fullgame.type === "GAMEBOY") return <GameBoy game={fullgame}/>;

	return (
		<pre>
			<code>{JSON.stringify(fullgame, null, 4)}</code>
		</pre>
	);
}
