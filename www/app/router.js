import Wiki from "./pages/Wiki";
import Home from "./pages/Home";
import Request from "./pages/Request";
import GameView from "./pages/GameView";
import LegacyGame from "./pages/LegacyGame";
import Developers from "./pages/Developers";

const ROUTES = [{
	path: "/",
	view: Home
}, {
	path: "/request",
	title: "Request",
	view: Request
}, {
	path: "/developers",
	title: "Become a Developer",
	view: Developers
}, {
	path: "/developers/wiki/",
	title: "Wiki - Become a Developer",
	view: Wiki
}, {
	path: "/developers/wiki/:wiki",
	title: "Wiki - Become a Developer",
	view: Wiki
}, {
	path: "/g/*",
	view: GameView
}, {
	path: "/game/*",
	view: LegacyGame
}];

export default ROUTES;
