import React, { useEffect, useState } from "react";
import { Icon, Menu, ListItem } from "photoncss/react";
import Photon, { guid, PhotonSelector } from "photoncss/src/js";
import classnames from "classnames";
import Waves from "photoncss/src/js/util/Waves";

export type ThemeMode = "light" | "dark" | "system";

export const systemTheme = (): ThemeMode => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export default function ThemeSwitch(): JSX.Element {

	// Initialize state
	const [ theme, setState ] = useState<ThemeMode>((localStorage.getItem("theme") || "system") as ThemeMode);

	// Generate unique ID for the menu
	const id = guid();

	// Create click actions
	function click(event: MouseEvent) {

		// Get the clicked icon
		const { target } = event;

		Photon.Menu(`#${id}` as PhotonSelector)
			.anchor($(target!) as PhotonSelector)
			.open();

	}

	function setTheme(theme: ThemeMode) {
		localStorage.setItem("theme", theme);
		setState(theme);
	}

	useEffect(function() {

		Waves.init();

		$("body")
			.removeClass("theme--light")
			.removeClass("theme--dark")
			.removeClass("theme--system")
			.addClass(`theme--${theme}`);

		let lastSystemTheme = "";
		const interval = setInterval(function() {
			const newSystemTheme = systemTheme();
			if (lastSystemTheme === newSystemTheme) return;
			lastSystemTheme = newSystemTheme;
			$(".theme--system")
				.removeClass("theme--light")
				.removeClass("theme--dark")
				.addClass(`theme--${newSystemTheme}`);

		});

		return () => clearInterval(interval);

	});

	// Return JSX
	return (
		<>
			<Icon onClick={click}>brightness_medium</Icon>
			<Menu id={id}>
				<ListItem onClick={ () => setTheme("light") } className={classnames(theme === "light" && "active")}>Light</ListItem>
				<ListItem onClick={ () => setTheme("dark") } className={classnames(theme === "dark" && "active")}>Dark</ListItem>
				<ListItem onClick={ () => setTheme("system") } className={classnames(theme === "system" && "active")}>System default</ListItem>
			</Menu>
		</>
	);

}
