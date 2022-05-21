import { useState } from "react";
import GameCard from "./GameCard";
import { BsFillGridFill, BsListUl } from "react-icons/all";
import classnames from "classnames";

export default function AllGames({ filter = () => true, games = Games }): JSX.Element {
	const [ isGridView, __setGridView ] = useState(localStorage.getItem("shellstate-gridview") === "true");
	const setGridView = (newState: boolean) => {
		localStorage.setItem("shellstate-gridview", newState.toString());
		__setGridView(newState);
	};
	const toRender = games.filter(filter);
	return (
		<div className="flex flex-col bg-red-300/10">
			<div className="ml-auto flex bg-white/50 dark:bg-zinc-700/50 my-2 rounded-md">
				<BsFillGridFill onClick={ () => setGridView(true) } className={classnames("w-8 h-8 p-1 cursor-pointer rounded-md hover:bg-white/50 dark:hover:bg-zinc-700/50", isGridView ? "bg-white dark:bg-zinc-700" : "hover:bg-white/50 dark:hover:bg-zinc-700/50")}/>
				<BsListUl onClick={ () => setGridView(false) } className={classnames("w-8 h-8 p-1 cursor-pointer rounded-md", !isGridView ? "bg-white dark:bg-zinc-700" : "hover:bg-white/50 dark:hover:bg-zinc-700/50")}/>
			</div>
			<div className={classnames("gap-2", isGridView ? "grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1" : "flex flex-col")}>{toRender.map((game, key) => <GameCard {...game} renderCard={isGridView} key={key}/>)}</div>
		</div>
	);
}
