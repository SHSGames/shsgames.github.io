import Home from "./pages/Home";
import Request from "./pages/Request";
import GameView from "./pages/GameView";
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
	path: "/game/*",
	view: GameView
}];

export default ROUTES;
