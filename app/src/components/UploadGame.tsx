import { useEffect, useRef, useState } from "react";
import classnames from "classnames";

export let setShown: React.Dispatch<React.SetStateAction<boolean>>;

export default function UploadGame(): JSX.Element {

	const safezone = useRef<HTMLDivElement>(null);
	const [ isShown, __setShown ] = useState(false);
	setShown = __setShown;

	function click(e: MouseEvent) {
		if (e.target === safezone.current!.parentElement) setShown(false);
	}

	useEffect(function() {
        safezone.current!.parentElement?.addEventListener("click", click);
        return () => safezone.current!.parentElement?.removeEventListener("click", click);
	}, []);

	return (
		<div className={classnames("fixed top-0 left-0 right-0 bottom-0 bg-black/20 z-[6] grid justify-center items-center transition", isShown ? "opacity-100" : "opacity-0 pointer-events-none")}>
			<div className={classnames("bg-white dark:bg-zinc-700 overflow-hidden rounded-2xl shadow-xl flex p-4 flex-col transition-transform min-w-[374px] lg:min-w-[clamp(374px,_50vw,_100vw)] w-[calc(100%_-_1rem)]", isShown ? "scale-100" : "scale-90")} ref={safezone}>
				<h1 className="text-4xl font-unisans whitespace-nowrap">Upload Game</h1>
				<div className="flex">

				</div>
			</div>
		</div>
	);
}
