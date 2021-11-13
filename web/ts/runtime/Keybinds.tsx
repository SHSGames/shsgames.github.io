import { useEffect } from "react";

export default function Keybinds(): null {

	useEffect(function() {
		$(document).on("keypress keydown keyup", function (event) {
			if (event.shiftKey) return;
			if ([ "Tab", "Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight" ].includes(event.key || "")) return event.preventDefault();
		});
	}, []);

	return null;
}
