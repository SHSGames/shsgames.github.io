import classnames from "classnames";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { base } from "../../manifest.json";
import hash from "../util/hash";
import slug from "../util/slug";

export interface GameProps extends Games.GameManifest {
	renderCard?: boolean
}

export default function GameCard({ name, thumbnail, renderCard = true, tags = [], type }: GameProps): JSX.Element {

	const [ isTruncated, setTruncated ] = useState(false);
	const titleRef = useRef<HTMLHeadingElement>(null);

	const [ smallScreen, setSmallScreen ] = useState(window.innerWidth < 640);
	useEffect(function() {
		const resize = () => setSmallScreen(window.innerWidth < 640);
		window.addEventListener("resize", resize);
		return () => window.removeEventListener("resize", resize);
	}, [ smallScreen ]);

	useEffect(function() {

		let mounted = true;

		function resize() {
			if (isTruncated) setTruncated(false);
		}

		(function animation() {
			if (!mounted) return;
			requestAnimationFrame(animation);
			window.addEventListener("resize", resize);
			if (!renderCard) {
				setTruncated(false);
				return;
			}
			if (titleRef.current) {
				const isOverflowing = titleRef.current!.scrollWidth > titleRef.current!.clientWidth;
				if (isTruncated !== isOverflowing) setTruncated(!renderCard || isOverflowing);
			}

		}());
		return () => {
			mounted = false;
			window.removeEventListener("resize", resize);
		};
	}, [ isTruncated, renderCard ]);

	return (
		<Link to={`${base}g/${hash(name)}/${slug(name)}`}>
			<div className={
				classnames("bg-white dark:bg-zinc-700 overflow-hidden rounded-2xl shadow-md flex p-2",
					renderCard && "cursor-pointer flex-col transition-[transform,box-shadow] z-[1] hover:z-[2] xl:hover:scale-110 hover:shadow-2xl hover:shadow-black/50")
			}>
				<img src={thumbnail || "/gamecard.svg"} alt="" className={
					classnames("rounded-xl select-none aspect-video",
						renderCard ? "w-full" : "h-32")}
				/>
				<div className={classnames("flex flex-col grow", renderCard ? "flex-col-reverse" : "pl-3")}>
					<div className="self-baseline flex flex-col py-4 grow w-full overflow-hidden">
						{ !isTruncated ? <h1 className={classnames("text-4xl font-unisans whitespace-nowrap", renderCard ? "text-center text-ellipsis overflow-hidden" : "")} ref={titleRef}>{name}</h1> : <Marquee gradient={false} style={{ overflow: "hidden" }}>
							<h1 className="text-4xl font-unisans whitespace-nowrap mx-8">{name}</h1>
						</Marquee>
						}
					</div>
					<div className={classnames("flex flex-row relative", renderCard ? "flex flex-row relative" : "-mx-3")}>
						<span className={classnames("grow p-2 flex flex-wrap", renderCard ? "absolute bottom-0" : "")} >
							{tags.map((tag, key) => <p className="font-mono m-1 font-bold px-2 rounded-md shadow-md text-white backdrop-blur-2xl" style={{ backgroundColor: "#aaa5", ...tag }} key={key}>{tag.name}</p>)}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
