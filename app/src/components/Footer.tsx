import DiscordInvite from "react-discord-invite";
import "react-discord-invite/dist/style.css";

export default function Footer(): JSX.Element {
	return (
		<footer id="footer">
			<div className="bg-header">
				<div className="mx-auto flex max-w-full md:max-w-[80%] w-[1280px] px-12 z-[4]">
					<div className="py-8 font-title">
						<h1 className="text-3xl pb-2 font-medium text-white">{ APP_MANIFEST.name }</h1>
						<p className="text-white text-xl pt-3">{ APP_MANIFEST.description }</p>
					</div>
				</div>
				<div className="mx-auto flex max-w-full md:max-w-[80%] w-[1280px] px-10 pb-4 -mt-4">
					<DiscordInvite guild="584437072618717209"/>
				</div>
				<div className="w-full text-gray-300 font-medium bg-black/10 h-12 flex justify-center items-center font-manrope">
					<div className="mx-auto flex max-w-full md:max-w-[80%] w-[1280px] px-12 z-[4]">
						Copyright © 2019 - 2022<a href="//joshmerlino.github.io"><span className="text-primary px-[6px]">Josh Merlino <span className="text-xs font-condensed">LLC</span></span></a> - All Rights Reserved
					</div>
				</div>
			</div>
		</footer>
	);
}
