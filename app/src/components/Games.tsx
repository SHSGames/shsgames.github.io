import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { BsFillGridFill, BsListUl } from "react-icons/bs";
import classnames from "classnames";
import useGames from "../hooks/useGames";

export default function AllGames({ filter = () => true }): JSX.Element {

	const [ games ] = useGames();
	const [ isGridView, __setGridView ] = useState(localStorage.getItem("shellstate-gridview") !== "false");
	const [ smallScreen, setSmallScreen ] = useState(window.innerWidth < 640);
	useEffect(function() {
		const resize = () => setSmallScreen(window.innerWidth < 640);
		window.addEventListener("resize", resize);
		return () => window.removeEventListener("resize", resize);
	}, [ smallScreen ]);

	const setGridView = (newState: boolean) => {
		localStorage.setItem("shellstate-gridview", newState.toString());
		__setGridView(newState);
	};

	return (
		<div className="flex flex-col">
			<div className={classnames("ml-auto flex bg-white/50 dark:bg-zinc-700/50 my-2 rounded-md", smallScreen && "hidden")}>
				<BsFillGridFill onClick={ () => setGridView(true) } className={classnames("w-8 h-8 p-1 cursor-pointer rounded-md hover:bg-white/50 dark:hover:bg-zinc-700/50", isGridView || smallScreen ? "bg-white dark:bg-zinc-700" : "hover:bg-white/50 dark:hover:bg-zinc-700/50")}/>
				<BsListUl onClick={ () => setGridView(false) } className={classnames("w-8 h-8 p-1 cursor-pointer rounded-md", !isGridView ? "bg-white dark:bg-zinc-700" : "hover:bg-white/50 dark:hover:bg-zinc-700/50")}/>
			</div>
			<div className={classnames("gap-2", smallScreen && "pt-2", isGridView || smallScreen ? "grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1" : "flex flex-col")}>
				{games
					.filter(filter)
					.sort((a, b) => a.name > b.name ? 1:-1)
					.map((game, key) =>
						<GameCard {...game} renderCard={isGridView || smallScreen} key={key}/>)}
			</div>
		</div>
	);
}
