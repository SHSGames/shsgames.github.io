import { guid, Waves } from "photoncss/lib";
import { Icon } from "photoncss/lib/react";
import React, { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "auto";
export const themes: Theme[] = [ "light", "dark", "auto" ];

export default function ThemeSwitcher(): JSX.Element {

	// Get Theme
	const [ theme, __setTheme ] = useState<Theme>((localStorage.getItem("theme") || "auto") as Theme);

	// Get system theme
	const systemTheme = (): Theme => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark":"light";

	// Function to set theme
	function setTheme(newTheme: Theme): void {
		const theme = newTheme === "auto" ? systemTheme() : newTheme;
		localStorage.setItem("theme", newTheme);
		$("body").attr("class", `theme--${theme}`);
		__setTheme(newTheme);
		const color = getComputedStyle(document.body)
			.getPropertyValue("--palette_header_background")
			.trim();
		$("meta[name=\"theme-color\"]").attr("content", color);
	}

	// On component render
	setImmediate(function() {
		setTheme(theme);
	});

	const id = guid();

	useEffect(function() {
		document.onkeydown = function (event) {
			if (event.key === "F10") {
				event.preventDefault();
				Waves.ripple($("#" + id)[0], {});
				next();
			}
		};
	});

	function next() {
		setTheme(themes[themes.indexOf(theme) + 1] || themes[0]);
	}

	// Return toggler
	return (
		<Icon onClick={next} id={id}>
			{ theme === "auto" && "brightness_auto" }
			{ theme === "dark" && "dark_mode" }
			{ theme === "light" && "light_mode" }
		</Icon>
	);
}
