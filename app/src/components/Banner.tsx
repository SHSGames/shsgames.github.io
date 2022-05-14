import { useEffect, useRef } from "react";
import manifest from "../../manifest.json";
import Toolbar from "./Toolbar";

export default function Banner(): JSX.Element {

	const MIN = 1.33;
	const MAX = 1;
	let scale = MAX;

	const ref = useRef<HTMLDivElement>(null);
	const banner = useRef<HTMLDivElement>(null);

	const setScale = (newscale: number) => {
		scale = newscale;
		ref.current!.style.transform = `scale(${scale})`;
		ref.current!.style.top = `${window.scrollY/1.44}px`;
		ref.current!.style.filter = `blur(${window.scrollY/banner.current!.clientHeight * 10}px)`;
		ref.current!.style.backgroundColor = `#18191c${Math.min(window.scrollY/banner.current!.clientHeight * 255, 255).toString(16)
			.padStart(2, "0")
			.split(".")[0]}`;
		banner.current!.style.top = -banner.current!.clientHeight + document.getElementById("toolbar")!.clientHeight + "px";
		banner.current!.style.paddingBottom = document.getElementById("toolbar")!.clientHeight + "px";
		if (window.scrollY > banner.current!.clientHeight - document.getElementById("toolbar")!.clientHeight) {
			banner.current!.classList.add("shadow-xl");
			banner.current!.classList.add("bg-header");
		} else {
			banner.current!.classList.remove("shadow-xl");
			banner.current!.classList.remove("bg-header");
		}
	};

	useEffect(() => {
		let isMounted = true;
		(function frame(){
			if (isMounted) requestAnimationFrame(frame);
			const scroll = Math.min(window.scrollY, banner.current!.clientHeight) / banner.current!.clientHeight;
			const newscale = MIN + (1 - scroll) * (MAX - MIN);
			if (scale !== newscale) setScale(newscale);
		}());
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<>
			<div className="pt-16 min-h-[440px] sticky overflow-hidden z-[3]" ref={ banner }>
				<div className="bg-banner absolute top-0 left-0 w-full h-full" ref={ ref } style={ { transform: `scale(${MAX})`} }></div>
				<div className="mx-auto flex min-w-[369px] max-w-[80%] lg:max-w-[90%] w-[1280px] z-[4] relative flex-wrap">
					<img src={ manifest.base + "maskable_icon.svg" } alt="" className="backdrop-blur-lg bg-neutral/60 select-none rounded-full bg-black/10 max-h-[192px] mx-auto lg:mx-4" />
					<div className="mx-auto lg:mx-14 my-1 font-unisans">
						<h1 className="text-4xl text-white font-medium py-3 inline-block">{ APP_MANIFEST.name }</h1>
						<p className="text-white font-unisans text-2xl pt-3">{ APP_MANIFEST.description }</p>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 w-full min-h-16" id="toolbar">
					<Toolbar fragment={ true }/>
				</div>
			</div>
		</>
	);
}
