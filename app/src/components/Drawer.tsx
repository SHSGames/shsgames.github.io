import classnames from "classnames";
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { base } from "../../manifest.json";
import useGames from "../hooks/useGames";
import hash from "../util/hash";
import slug from "../util/slug";
import GamesBadge from "./GamesBadge";

export let setState: Dispatch<SetStateAction<boolean>>;

export default function Drawer(): JSX.Element {

	const [ games ] = useGames();
	const [ open, setOpen ] = useState(false);
	setState = setOpen;

	type Props = { children?: ReactNode, to: string }
	function DrawerItem({ children, to }: Props) {
		const route = useLocation();
		const classes = classnames("h-12 waves-effect rounded-r-full mr-4 text-sm font-bold font-manrope flex items-center px-4 text-zinc-800 dark:text-gray-300", route.pathname === base + to.substring(1) ? "bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20" : "hover:bg-black/20 dark:hover:bg-white/20");
		const LinkItem = ({ children }: { children?: ReactNode }) => to.toString().includes("://") ? <a href={ to } className={ classes } onClick={ () => setOpen(false) }>{ children }</a> : <Link to={ base + to.substring(1) } className={ classes } onClick={ () => setOpen(false) }>{ children }</Link>;
		return <LinkItem>{ children }</LinkItem>;
	}

	useEffect(function() {
		function keydown(event: KeyboardEvent) {
			if (event.key === "\\") {
				console.log({ open });
				setOpen(!open);
				event.preventDefault();
			}
		}
		document.addEventListener("keydown", keydown);
		return () => document.removeEventListener("keydown", keydown);
	}, [ open ]);

	return (
		<>
			<div className={ classnames("w-full fixed top-0 h-full left-0 bg-black/20 transition-opacity xl:hidden z-[9]", open ? "" : "opacity-0 pointer-events-none") } onClick={ () => setOpen(false) }></div>
			<aside className={ classnames("bg-white dark:bg-zinc-700 ease-in-out w-[300px] fixed top-0 h-full z-[10] shadow-md transition-[opacity,left] xl:left-0", open ? "left-0" : "left-[-300px]") }>
				<img src={ base + "icon.png" } alt="" className="select-none rounded-full max-h-[192px] mx-auto my-4" />
				<hr className="dark:border-zinc-600 mb-2" />
				<DrawerItem to="/">
					<AiOutlineHome className="text-2xl mr-3"/>
					Home
				</DrawerItem>
				<hr className="dark:border-zinc-600 my-2" />
				<h1 className="mr-4 text-sm font-medium font-manrope flex items-center px-4 text-zinc-800 dark:text-gray-300 h-12">Games <GamesBadge/></h1>
				{ games.sort((a, b) => a.name > b.name ? 1:-1).map(({ name }, key) => <DrawerItem key={key} to={`/g/${hash(name)}/${slug(name)}`}>
					<IoGameControllerOutline className="text-2xl mr-3"/>{name}
				</DrawerItem>)}
			</aside>
		</>
	);
}
