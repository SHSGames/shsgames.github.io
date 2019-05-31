import Home from "./pages/Home";
import Request from "./pages/Request";
import GameView from "./pages/GameView";

const ROUTES = [{
	path: "/",
	view: Home
}, {
	path: "/request",
	title: "Request",
	view: Request
}, {
	path: "/game/*",
	view: GameView
}];

export default ROUTES;
