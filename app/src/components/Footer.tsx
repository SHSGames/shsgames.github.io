import DiscordInvite from "react-discord-invite";
import "react-discord-invite/dist/style.css";

export default function Footer(): JSX.Element {
	return (
		<footer id="footer">
			<div className="bg-header">
				<div className="mx-auto flex max-w-full md:max-w-[80%] w-[1280px] px-12 z-[4] py-8 flex-wrap">
					<div className="flex flex-col">
						<h1 className="text-3xl font-title pb-2 font-medium text-white border-b-[2px] border-b-primary mr-auto tracking-[10px] shrink-0">{ APP_MANIFEST.name }</h1>
						<p className="text-white pt-2">{ APP_MANIFEST.description }</p>
					</div>

					<div className="ml-auto">
						<div className="-mx-4">
							<DiscordInvite guild="584437072618717209"/>
						</div>
					</div>
				</div>
				<div className="w-full text-gray-300 font-medium bg-black/10 h-12 flex justify-center items-center font-manrope">
					<div className="mx-auto flex max-w-full md:max-w-[80%] w-[1280px] px-12 z-[4] flex-row text-sm relative leading-4">
						<div className="flex flex-col">
							<span>Copyright © 2019 - 2022 • All Rights Reserved</span>
							<span className="text-gray-300">
								<a className="text-primary underline" href="//joshmerlino.github.io">Josh Merlino <span className="text-xs font-condensed">LLC</span></a>
								<span className="opacity-20"> • </span>
								<a className="text-primary underline" href="//th3skeleton.github.io/pshel/">Prkr</a>
								<span className="opacity-20"> • </span>
								<span>And our amazing </span>
								<a className="text-primary underline" href="//github.com/SHSGames/shsgames.github.io/graphs/contributors">Contributors</a>
							</span>
						</div>
						<div className="ml-auto py-2">
							Version: <code className="border-[1px] border-neutral-500/20 rounded-md px-1 ml-2">v{APP_MANIFEST.version}</code>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
