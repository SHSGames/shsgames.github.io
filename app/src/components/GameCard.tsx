import classnames from "classnames";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

export interface GameProps extends Games.GameManifest {
	renderCard?: boolean
}

export default function GameCard({ name, thumbnail, renderCard = true, tags = [] }: GameProps): JSX.Element {

	const [ isTruncated, setTruncated ] = useState(false);
	const titleRef = useRef<HTMLHeadingElement>(null);

	useEffect(function() {
		let mounted = true;
		(function animation() {
			if (mounted) requestAnimationFrame(animation);
			if (titleRef.current) {
				const isOverflowing = titleRef.current!.scrollWidth > titleRef.current!.clientWidth;
				if (isTruncated !== isOverflowing) setTruncated(isOverflowing);
			}
		}());
		return () => {
			mounted = false;
		};
	});

	return (
		<div className={
			classnames("bg-white dark:bg-zinc-700 overflow-hidden rounded-2xl shadow-md flex p-2",
				renderCard ? "flex-col" : "")
		}>
			<img src={thumbnail || "/gamecard.svg"} alt="" className={
				classnames("rounded-xl select-none aspect-video",
					renderCard ? "w-full" : "h-32")}
			/>
			<div className={classnames("flex flex-col grow", renderCard ? "flex-col-reverse" : "pl-3")}>
				<div className="self-baseline flex flex-col py-4 grow w-full overflow-hidden">
					{ !isTruncated ? <h1 className={classnames("text-4xl font-unisans whitespace-nowrap", renderCard ? "text-center text-ellipsis overflow-hidden" : "")} ref={titleRef}>{name}</h1>:<Marquee>
						<h1 className="text-4xl font-unisans whitespace-nowrap mx-8">{name}</h1>
					</Marquee>
					}
				</div>
				<div className={classnames("flex flex-row relative", renderCard ? "flex flex-row relative" : "-mx-3")}>
					<span className={classnames("grow p-2 flex flex-wrap", renderCard ? "absolute bottom-0" : "")} >
						{tags.map((tag, key) => <p className="font-mono m-1 font-bold px-2 rounded-md shadow-sm text-white" style={{ backgroundColor: tag.color || "#1976d4"}} key={key}>#{tag.name}</p>)}
					</span>
				</div>
			</div>
		</div>
	);
}
