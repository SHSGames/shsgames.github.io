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
	path: "/g/*",
	view: GameView
}, {
	path: "/game/*",
	view: LegacyGame
}];

export default ROUTES;
