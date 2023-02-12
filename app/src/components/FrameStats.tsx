import React, { useEffect, useState } from "react";

export default function FrameStats(): JSX.Element {

	const lastFrames = [];
	const [ frames, setFrames ] = useState([ 0, 0 ]);

	let _mounted = false;
	useEffect(function() {
		_mounted = true;
		return function(){
			_mounted = false;
		};
	}, []);

	let lastTimestamp = performance.now();
	(function frame(){
		requestAnimationFrame(frame);
		if (!_mounted) return;
		const duration = performance.now() - lastTimestamp;
		lastTimestamp = performance.now();
		lastFrames.push(duration);
		if (lastFrames.length > 100) lastFrames.shift();
	}());

	(function loop() {
		setTimeout(loop, 1000);
		if (!_mounted) return;
		setFrames([
			Math.trunc(1000/Math.min(...lastFrames)),
			Math.trunc(1000/Math.max(...lastFrames))
		]);
	}());

	return <>{ frames.join("/") }</>;
}
