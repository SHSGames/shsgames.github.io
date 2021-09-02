import React from "react";
import FrameStats from "./FrameStats";

export default function GameManager(): JSX.Element {
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
			onClick={ () => $(".game-renderer")[0].requestFullscreen() }>Fullscreen</p>
		</div>
	);
}
