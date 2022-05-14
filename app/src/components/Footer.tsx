import DiscordInvite from "react-discord-invite";
import "react-discord-invite/dist/style.css";

export default function Footer(): JSX.Element {
	return (
		<footer id="footer">
			<div className="bg-header">
				<div className="mx-auto flex max-w-full md:max-w-[80%] w-[1280px] px-12 z-[4]">
					<div className="py-8 flex flex-col">
						<h1 className="text-3xl font-title pb-2 font-medium text-white border-b-[2px] border-b-primary mr-auto tracking-[10px]">{ APP_MANIFEST.name }</h1>
						<p className="text-white pt-2">{ APP_MANIFEST.description }</p>
					</div>
				</div>
				<div className="mx-auto flex max-w-full md:max-w-[80%] w-[1280px] px-10 pb-4 -mt-4">
					<DiscordInvite guild="584437072618717209"/>
				</div>
				<div className="w-full text-gray-300 font-medium bg-black/10 h-12 flex justify-center items-center font-manrope">
					<div className="mx-auto flex max-w-full md:max-w-[80%] w-[1280px] px-12 z-[4] flex-col text-sm relative">
						<span>Copyright © 2019 - 2022 • All Rights Reserved</span>
						<a href="//joshmerlino.github.io"><span className="text-primary">Josh Merlino <span className="text-xs font-condensed">LLC</span></span></a>
						<div className="absolute right-0 top-0 bottom-0 flex items-center">
							Version: <code className="border-[1px] border-neutral-500/20 rounded-md px-1 ml-2">v18.13.2</code>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
