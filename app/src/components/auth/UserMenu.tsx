import classNames from "classnames";
import { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { IoMdExit } from "react-icons/io";
import { forceSet, User } from "../../hooks/useUser";
import { GunContext } from "../../runtime/GunContext";
import Waves from "../../../../photoncss/src/ts/util/Waves";
export let setOpen: Dispatch<SetStateAction<boolean>>;

export type Props = { user: false | User | null}
export default function UserMenu({ user }: Props): JSX.Element | null {

	const db = useContext(GunContext);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [ open, __setOpen ] = useState(false);
	setOpen = __setOpen;

	useEffect(function() {
		function click(e: MouseEvent) {
			if (!wrapperRef.current!.contains(e.target as Node)) setOpen(false);
		}
		document.addEventListener("click", click);
		requestAnimationFrame(() => Waves.init());
		return function() {
			document.removeEventListener("click", click);
		};
	}, []);

	if (user === null || user === false) return null;

	return (
		<div className={classNames("bg-white dark:bg-zinc-700 rounded-2xl shadow-md flex flex-col absolute overflow-hidden top-0 right-0 z-[15] m-3 origin-top-right max-w-[320px] w-full transition-[opacity,transform]", !open && "opacity-0 scale-90 pointer-events-none")} ref={wrapperRef}>
			<div className="h-24 flex">
				<div className="w-16 h-16 bg-cyan-500 rounded-full shrink-0 m-4 text-4xl items-center justify-center flex truncate text-white">{user.username
					.toUpperCase()
					.split(" ")
					.map(a => a[0])
					.join("")
					.substring(0, 2)}</div>
				<ul className="flex flex-col list-none justify-center text-sm mr-4 truncate text-gray-800 dark:text-gray-300">
					<li className="text-base">{ user.username }</li>
					<li>{ user.email }</li>
					<li><a className="text-gray-600 dark:text-gray-400 underline" href="//github.com/SHSGames/shsgames.github.io/blob/master/PRIVACY.md" target="_blank">Privacy Statement</a></li>
				</ul>
			</div>
			<hr className="dark:border-zinc-600"/>
			<div className="waves-effect h-14 flex items-center flex-row transition-colors hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10" onClick={ () => {
				db.user().leave();
				forceSet(false);
			} }>
				<IoMdExit className="text-2xl ml-9 mr-6 opacity-70"/>
				<p className="mr-5 select-none text-xm opacity-80">Sign out</p>
			</div>
		</div>
	);
}
