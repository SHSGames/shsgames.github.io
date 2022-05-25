import { useEffect } from "react";

export default function Adsense(): JSX.Element {

	useEffect(function() {
		try {
			// eslint-disable-next-line no-extra-parens
			((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
		} catch (e) {
			console.error(e);
		}

	}, []);

	return (
		<div className="flex bg-yellow-500 min-w-[360px]">
			<ins className="adsbygoogle block"
				data-ad-format="autorelaxed"
				data-ad-client="ca-pub-6128732932572955"
				data-adtest="on"
				data-ad-test="on"
				data-ad-slot="5379179914"></ins>
		</div>
	);
}
