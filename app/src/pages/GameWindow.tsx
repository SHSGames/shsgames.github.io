import { useParams } from "react-router-dom";
import Adsense from "../components/Adsense";
import Error404 from "../components/Error404";
import Toolbar from "../components/Toolbar";
import useGames from "../hooks/useGames";
import hash from "../util/hash";
import slug from "../util/slug";
import { base } from "../../manifest.json";
import { useEffect, useRef, useState } from "react";

export const path = "/g/:gameid/:gameslug";

export default function GameWindow(): JSX.Element {

	const frame = useRef<HTMLIFrameElement>(null);
	const [ games ] = useGames();
	const { gameid, gameslug } = useParams();
	const [ scale, setScale ] = useState(1);
	const game = games.filter(g => gameid === hash(g.name) || gameslug === slug(g.name))[0] || null;

	if (game === null) return <Error404/>;

	return (
		<>
			<Toolbar>{game.name}</Toolbar>
			<div className="mx-auto max-w-full xl:max-w-[90%] w-full xl:px-12 lg:px-6 px-2 pb-2">
				<div className="mx-auto w-max xl:!max-w-full" style={{ maxWidth: game.width }}>

					<div className="flex py-4 lg:pt-8">
						<h1 className="text-3xl font-title pb-2 font-medium dark:text-white border-b-[2px] border-b-primary mr-auto tracking-[10px] shrink-0">{ game.name }</h1>
					</div>
					<div className="flex flex-wrap gap-2">
						<div className="grow">
							<div className="mx-auto bg-red-500 origin-top-left" style={{ width: game.width, height: game.height, transform: `scale(${scale})` }}>
								<iframe
									ref={frame}
									className="bg-gray-300 dark:bg-zinc-700/20 h-full"
									src={`${base}player.html?game=${encodeURIComponent(btoa(JSON.stringify(game)))}&hash=${hash(JSON.stringify(game), 36)}`}
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope"
									scrolling="no"
									style={{ width: game.width, height: game.height }}></iframe>
							</div>
						</div>
						<Adsense/>
					</div>
				</div>
			</div>
		</>
	);
}
