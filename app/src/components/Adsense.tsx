import { CSSProperties, useEffect, useState } from "react";

export default function Adsense({ style }: { style?: CSSProperties }): JSX.Element {

	const [ enabled ] = useState(false);

	if (enabled) return (
		<div className="flex md:min-w-[360px] max-w-[calc(100vw_-_32px)] min-h-[360px] grow" style={style}>
			<ins className="adsbygoogle"
				style={{ display: "block" }}
				data-ad-format="autorelaxed"
				data-ad-client="ca-pub-6128732932572955"
				data-ad-slot="5379179914"></ins>
		</div>
	);

	return (
		<div className="flex md:min-w-[360px] max-w-[calc(100vw_-_32px)] min-h-[360px] grow bg-yellow-500/10">

		</div>
	);
}
