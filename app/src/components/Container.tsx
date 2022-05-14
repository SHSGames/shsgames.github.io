import { ReactNode, useEffect, useState } from "react";

export default function Container({ children }: { children?: ReactNode }): JSX.Element {

	const [ minHeight, setMinHeight ] = useState(0);
	useEffect(function() {
		let isMounted = true;
		(function frame() {
			if (isMounted) requestAnimationFrame(frame);
			const height = window.innerHeight - document.getElementById("footer")!.clientHeight;
			if (height !== minHeight) setMinHeight(height);
		}());
		return function() {
			isMounted = false;
		};
	});

	return (
		<div className="w-full" style={ { minHeight } }>{ children }</div>
	);
}
