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

	const iframe = useRef<HTMLIFrameElement>(null);
	const [ games ] = useGames();
	const { gameid, gameslug } = useParams();
	const [ scale, setScale ] = useState(1);
	const game = games.filter(g => gameid === hash(g.name) || gameslug === slug(g.name))[0] || null;

	/**
	 UseEffect(function() {
		 if (!game) return;
		 let lastWidth = -1;
		 let isMounted = true;
		 (function frame(){
			 if (isMounted) requestAnimationFrame(frame);
			 if (lastWidth !== window.innerWidth) {
				 lastWidth = window.innerWidth;
				 const isWrapping = iframe.current!.clientHeight < iframe.current!.parentElement!.parentElement!.parentElement!.clientHeight && window.innerWidth ;
				 const shouldScaleUp = iframe.current!.clientWidth < iframe.current!.parentElement!.parentElement!.parentElement!.clientWidth;
				 const shouldScaleDown = iframe.current!.clientWidth + 32 >= iframe.current!.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.clientWidth || iframe.current!.parentElement!.parentElement!.parentElement!.clientWidth < iframe.current!.clientWidth;
				 console.log({ isWrapping, shouldScaleDown, shouldScaleUp });
				 if (isWrapping) {
					 if (shouldScaleDown) {
						 const newScale = (window.innerWidth - 32) / game.width;
						 console.log(newScale);
						 setScale(newScale);
						}

					}
				}
			}());
			return function() {
				isMounted = false;
			};
		}, [ game ]);
		*/
	function resize() {
		const red = iframe.current!.parentElement!.parentElement!;
		const frame = iframe.current!;
		setScale(red.clientWidth / frame.clientWidth);
	}

	useEffect(function() {
		if (!iframe.current) return;
		resize();
		window.addEventListener("resize", resize);
		return () => window.removeEventListener("resize", resize);
	}, [ game ]);

	if (game === null) return <Error404/>;

	return (
		<>
			<Toolbar>{game.name}</Toolbar>
			<div className="mx-auto max-w-full xl:max-w-[90%] w-full xl:px-12 lg:px-6 px-2 pb-2">
				<div className="mx-auto w-max max-w-full">

					<div className="flex py-2 pt-4 lg:pt-8 bg-green-500 mb-2">
						<h1 className="max-w-full text-3xl font-title pb-2 font-medium truncate dark:text-white border-b-[2px] border-b-primary tracking-widest md:tracking-[6px] lg:tracking-[10px] shrink-0">{ game.name }</h1>
					</div>
					<div className="flex flex-wrap gap-2">
						<div className="grow">
							<div className="bg-red-500 origin-top-left overflow-hidden lg:max-w-[100%] max-w-[calc(100vw_-_32px)]" style={{ height: game.height * scale }}>
								<iframe
									ref={iframe}
									className="bg-gray-300 dark:bg-zinc-700/20 h-full origin-top-left"
									src={`${base}player.html?game=${encodeURIComponent(btoa(JSON.stringify(game)))}&hash=${hash(JSON.stringify(game), 36)}`}
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope"
									scrolling="no"
									style={{ width: game.width, height: game.height, transform: `scale(${scale})` }}></iframe>
							</div>
						</div>
						<Adsense/>
					</div>
				</div>
			</div>
		</>
	);
}
