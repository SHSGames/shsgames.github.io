import React from "react";
import FrameStats from "./FrameStats";

export default function GameManager(): JSX.Element {
	return (
		<div className="game-manager">
			<p className="frame-counter mono">FPS: <FrameStats/></p>
		</div>
	);
}
