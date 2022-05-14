import { useEffect, useState } from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { MdOutlineBrightnessAuto, MdOutlineDarkMode } from "react-icons/md";

export type ThemeMode = "DARK" | "LIGHT" | "AUTO";

export default function ThemeToggle(): JSX.Element {

	const [ state, setState ] = useState("theme" in localStorage ? localStorage.theme === "dark" ? "DARK" : "LIGHT" : "AUTO");

	useEffect(function() {
		if (state === "DARK" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [ state ]);

	useEffect(function() {
		function keydown(event: KeyboardEvent) {
			if (event.key === "F10") {
				event.preventDefault();
				nextState();
			}
		}
		document.addEventListener("keydown", keydown);
		return () => document.removeEventListener("keydown", keydown);
	});

	function nextState() {
		if (state === "DARK") {
			localStorage.removeItem("theme");
			setState("AUTO");
		}
		if (state === "AUTO") {
			localStorage.theme = "light";
			setState("LIGHT");
		}
		if (state === "LIGHT") {
			localStorage.theme = "dark";
			setState("DARK");
		}
	}

	return (
		<div onClick={ nextState } className="relative m-2 rounded-full h-8 py-1 px-4 text-2xl inline-flex items-center font-semibold cursor-pointer bg-zinc-800/60 hover:bg-zinc-700/60 text-white ml-auto z-[3] border-[1px] border-neutral-700/60 backdrop-blur-lg">
			{ state === "AUTO" && <MdOutlineBrightnessAuto className="mr-2"/> }
			{ state === "DARK" && <MdOutlineDarkMode className="mr-2"/> }
			{ state === "LIGHT" && <BsBrightnessHigh className="mr-2"/> }
			<p className="text-lg select-none">Change Theme</p>
		</div>
	);
}
