import { Icon } from "photoncss/lib/react";
import React, { useEffect, useState } from "react";
import { getGameID } from "../util/gameHash";
import { Game } from "../../games";

export type StarProps = { game: Game };
export default function Star({ game }: StarProps): JSX.Element {

	const [ stars, setStars ] = useState(localStorage.getItem("stars")?.split(",")
		.filter(a => a !== "")
		.filter(a => a !== undefined) ?? []);

	const id = getGameID(game);
	const [ isStarred, setIsStarred ] = useState(stars.includes(id));

	useEffect(function() {
		let shouldLoop = true;
		(function loop() {
			if (shouldLoop) requestAnimationFrame(loop);
			const newState = localStorage.getItem("stars")?.split(",")
				.filter(a => a !== "")
				.filter(a => a !== undefined) ?? [];
			if (newState.join() !== stars.join()) setStars(newState);
		}());
		return () => {
			shouldLoop = false;
		};
	});

	function star() {
		if (stars.includes(id)) {
			delete stars[stars.indexOf(id)];
		} else {
			stars.push(id);
		}
		localStorage.setItem("stars", stars.filter(s => s !== undefined).join(","));
		setIsStarred(!isStarred);
	}

	return (
		<Icon style={{ float: "left", transform: "translate(10px, 10px)", color: isStarred ? "#ffc107":"var(--palette_body_body)" }} onClick={star}>{isStarred ? "star" : "star_outline"}</Icon>
	);
}
