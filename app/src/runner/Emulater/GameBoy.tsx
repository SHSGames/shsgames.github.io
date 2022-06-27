import { useEffect, useRef } from "react";
import { Gameboy as Emulator } from "gameboy-emulator";

export default function Gameboy({ game }: { game: Games.FullGame }): JSX.Element {

	const gameboy = new Emulator;
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(function() {
		fetch(game.executable)
			.then(resp => resp.arrayBuffer())
			.then(rom => {
				gameboy.loadGame(rom);
				gameboy.apu.enableSound();

				const context = ref.current!.getContext("2d");
				gameboy.onFrameFinished((imageData: ImageData) => context?.putImageData(imageData, 0, 0));
				gameboy.run();
			});

	}, [ game.hash ]);

	return <canvas width="160" height="144" ref={ref} style={{ width: "100vw", imageRendering: "pixelated" }}></canvas>;

}
