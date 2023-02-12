import React, { useEffect } from "react";
import { Game } from "../../games";
import useFetch from "../hooks/useFetch";
import FrameStats from "./FrameStats";

type GameManagerProps = { game: Game };
export default function GameManager({ game }: GameManagerProps): JSX.Element {

	let [ issues ] = useFetch<GitHub.Issue[]>("https://api.github.com/repos/SHSGames/shsgames.github.io/issues");
	if (issues) issues = issues.filter(issue => issue.title.toLowerCase().includes(game.name.toLowerCase()) && issue.state === "open");

	useEffect(function() {
		$(document).on("keypress", function (event) {
			if (event.shiftKey) return;
			const search = $(".search")
				.children(".photon-input")
				.children("input");
			if (search.is(":focus")) return;
			if (event.key !== "f") return;
			$("#game-renderer")[0].requestFullscreen();
		});
	});

	return (
		<div className="game-manager">
			<p className="frame-counter mono">FPS: <FrameStats/></p>
			<p className="link mono" style={{
				float: "right",
				color: "var(--palette_primary_light)",
				fontWeight: 500,
				cursor: "pointer",
				userSelect: "none"
			}}
			onClick={ () => $("#game-renderer")[0].requestFullscreen() }>Fullscreen</p>

			<p className="link mono" style={{
				float: "right",
				color: "var(--palette_error)",
				fontWeight: 500,
				cursor: "pointer",
				userSelect: "none"
			}}
			onClick={ () => window.open(`https://github.com/SHSGames/shsgames.github.io/issues?q=is%3Aissue+is%3Aopen+%22${encodeURIComponent(game.name.toLowerCase())}%22+in%3Atitle`) }>Report a bug{ issues && issues.length > 0 && <span className="badge" style={{
					background: "var(--palette_error)",
					padding: "2px 6px",
					marginLeft: "8px",
					fontSize: "inherit"
				}}> +{issues.length}</span>}
			</p>

		</div>
	);
}
