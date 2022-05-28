import { CSSProperties, useEffect } from "react";

export default function Adsense({ style }: { style?: CSSProperties }): JSX.Element {

	useEffect(function() {
		try {
			// eslint-disable-next-line no-extra-parens
			((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
		} catch (e) {
			console.error(e);
		}

	}, []);

	return (
		<div className="flex bg-yellow-500 md:min-w-[360px] max-w-[calc(100vw_-_32px)] min-h-[360px] grow" style={style}>
			<ins className="adsbygoogle"
				style={{ display: "block" }}
				data-ad-format="autorelaxed"
				data-ad-client="ca-pub-6128732932572955"
				data-ad-slot="5379179914"></ins>
		</div>
	);
}
