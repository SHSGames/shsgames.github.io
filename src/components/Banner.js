import React, { useEffect } from "react";
import { Card } from "@photoncss/Card";

export default function Component({ src, ...props }) {

	// Generate UUID for the banner
	const uuid = Photon.guid();

	// Track when the component is mounted and unmounted
	let __mounted = false;
	useEffect(() => { __mounted = true; return () => { __mounted = false }});

	// Perform update on every frame component is mounted
	(function frame() {

		// Queue function to run on next frame
		requestAnimationFrame(frame);

		// Ensure the component is mounted for performance
		if(!__mounted) return;

		// Define banner element
		const banner = $(`#${uuid}`);

		banner.css({
		  transform: `translateY(${ $(window).scrollTop() }px) scale(${ Math.max(1 - $(window).scrollTop() / $(window).height(), .4) })`,
		  opacity: 1 - $(window).scrollTop() / $(window).height() * 2
	  	});

	}());

	return (
		<Card style={{ overflow: "hidden", zIndex: -1, position: "relative", transformOrigin: "top" }} id={uuid} {...props}>
			<img src={src} alt="" style={{ width: "100%", height: "100%" }}/>
		</Card>
	)
}
