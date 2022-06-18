import qs from "qs";
import ghash from "../util/hash";
import jsnes from "jsnes";

export default function GameRunner(): JSX.Element {

	const { game, hash } = qs.parse(location.search.substring(1));
	const matches = ghash(atob(game!.toString()), 36) === hash;
	const parsed: Games.Game = JSON.parse(atob(game!.toString()));

	const ext = parsed.executable.split(".").pop();
	console.log(ext);

	const details = {
		id: ghash(parsed.name).toString(),
		hash: hash?.toString(),
		signed: matches.toString(),
		ext
	};

	return (
		<pre>
			<code>{JSON.stringify({ ...parsed, ...details }, null, 4)}</code>
		</pre>
	);

}
