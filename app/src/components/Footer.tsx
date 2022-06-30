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
						<ul className="list-disc px-5 py-2 text-white">
							<li><a className="text-primary underline" href="//github.com/SHSGames/shsgames.github.io/issues" target="_blank">Issue Tracker</a></li>
							<li><a className="text-primary underline" href="//github.com/SHSGames/shsgames.github.io/blob/master/README.md" target="_blank">About</a></li>
							<li><a className="text-primary underline" href="//github.com/SHSGames/shsgames.github.io/blob/master/LICENSE.md" target="_blank">License</a></li>
							<li><a className="text-primary underline" href="//github.com/SHSGames/shsgames.github.io/blob/master/PRIVACY.md" target="_blank">Privacy Statement</a></li>
						</ul>
					</div>

					<div className="ml-auto">
						<div className="-mx-4">
							<DiscordInvite guild="584437072618717209"/>
							<div className="p-2">
								<a href="//github.com/SHSGames/shsgames.github.io" target="_blank">
									<img src={"https://github-readme-stats.vercel.app/api/pin/?username=SHSGames&repo=shsgames.github.io&theme=radical&bg_color=2f3136&border_color=3f3f46&title_color=58a6ff&icon_color=adbac7&text_color=adbac7"} alt="" className="raised-3"/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full text-gray-300 font-medium bg-black/10 min-h-[48px] flex justify-center items-center font-manrope">
					<div className="mx-auto flex max-w-full md:max-w-[80%] w-[1280px] px-12 z-[4] flex-row text-sm relative leading-4">
						<div className="flex flex-col">
							<div>Copyright © 2019-2022<span className="opacity-20"> • </span>All Rights Reserved</div>
							<div className="text-gray-300">
								<a className="text-primary underline" href="//joshmerlino.github.io">Josh Merlino <span className="text-xs font-condensed">LLC</span></a>
								<span className="opacity-20"> • </span>
								<a className="text-primary underline" href="//th3skeleton.github.io/pshel/">Prkr</a>
								<span className="opacity-20"> • </span>
								<span>And our amazing </span>
								<a className="text-primary underline" href="//github.com/SHSGames/shsgames.github.io/graphs/contributors">Contributors</a>
							</div>
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
