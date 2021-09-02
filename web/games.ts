export type GameRunner = "EMULATOR_GBA" | "EMULATOR_NES" | "IFRAME" | "UNITY";
export interface Game {
	name: string;
	runner: GameRunner;
	thumbnail: string;
	game: string;
	aspectRatio?: number;
	width?: number;
}

export default <Game[]>[
	{
		name: "Slope",
		runner: "UNITY",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/slope.jpg",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/slope_v7.json",
		aspectRatio: 16 / 9,
		width: 1200
	}, {
		name: "Advance Wars",
		runner: "EMULATOR_GBA",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/advance-wars.jpg",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/advance-wars.gba",
		aspectRatio: 5 / 4
	}, {
		name: "Bubble Bobble",
		runner: "EMULATOR_NES",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/bubble-bobble.jpg",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/bubble-bobble.nes",
		aspectRatio: 16 / 15,
		width: 640
	},
	{
		name: "Baldi's Basic",
		runner: "IFRAME",
		game: "/built-games/baldis-basics/index.html",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/baldis-basic.jpg",
		width: 800,
		aspectRatio: 800 / 600
	}, {
		name: "Chrome Dino",
		runner: "IFRAME",
		game: "/built-games/chromedino/index.html",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/chrome-dino.jpg",
		width: 600,
		aspectRatio: 3
	}, {
		name: "Cookie Clicker",
		runner: "IFRAME",
		game: "/built-games/cookieclicker/index.html",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/cookie-clicker.jpg",
		width: 1080,
		aspectRatio: 3 / 2
	}, {
		name: "CSGOClicker",
		runner: "IFRAME",
		game: "/built-games/csgoclicker/index.html",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/csgoclicker.jpg",
		width: 1080,
		aspectRatio: 5 / 3
	}, {
		name: "Super Smash Flash 2",
		runner: "IFRAME",
		game: "/built-games/ssf2/index.html",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/super-smash-flash-2.jpg",
		width: 800,
		aspectRatio: 2
	}, {
		name: "Tanuki Sunset",
		runner: "IFRAME",
		game: "/built-games/takumiraccoon/index.html",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/tanuki-sunset.jpg",
		width: 800,
		aspectRatio: 800 / 660
	}

];
