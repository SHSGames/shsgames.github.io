import qs from "qs";
import ghash from "../util/hash";

export default function GameRunner(): JSX.Element {
	const { game, hash } = qs.parse(location.search.substring(1));
	const matches = ghash(atob(game!.toString()), 36) === hash;
	return (
		<pre>
			<code>
				{JSON.stringify(JSON.parse(atob(game!.toString())), null, 4)}
			</code>
			<p>hash: {hash?.toString()}</p>
			<p>ok: {matches.toString()}</p>
		</pre>
	);
}
