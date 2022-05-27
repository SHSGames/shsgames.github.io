import { useParams } from "react-router-dom";
import Adsense from "../components/Adsense";
import Error404 from "../components/Error404";
import Toolbar from "../components/Toolbar";
import useGames from "../hooks/useGames";
import hash from "../util/hash";
import slug from "../util/slug";
import { base } from "../../manifest.json";

export const path = "/g/:gameid/:gameslug";

export default function GameWindow(): JSX.Element {

	const [ games ] = useGames();
	const { gameid, gameslug } = useParams();
	const game = games.filter(g => gameid === hash(g.name) || gameslug === slug(g.name))[0] || null;
	if (game === null) return <Error404/>;

	return (
		<>
			<Toolbar>{game.name}</Toolbar>
			<div className="mx-auto max-w-full xl:max-w-[90%] w-full xl:px-12 lg:px-6 px-2 pb-2">
				<div className="mx-auto w-max max-w-full">
					<div className="flex py-4 lg:pt-8">
						<h1 className="text-3xl font-title pb-2 font-medium dark:text-white border-b-[2px] border-b-primary mr-auto tracking-[10px] shrink-0">{ game.name }</h1>
					</div>
					<div className="flex flex-wrap gap-2">
						<iframe
							className="bg-gray-300 dark:bg-zinc-700/20 h-full"
							src={`${base}player.html?game=${encodeURIComponent(btoa(JSON.stringify(game)))}&hash=${hash(JSON.stringify(game), 36)}`}
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope"
							scrolling="no"
							style={{ width: game.width, height: game.height }}></iframe>
						<Adsense/>
					</div>
				</div>
			</div>
		</>
	);
}
