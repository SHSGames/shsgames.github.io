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
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/slope.jpg",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/slope_v7.json",
		aspectRatio: 16 / 9,
		width: 1200
	}, {
		name: "Advance Wars",
		runner: "EMULATOR_GBA",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/advance-wars.jpg",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/advance-wars.gba",
		aspectRatio: 5 / 4
	}, {

		name: "Cookie Clicker",
		runner: "IFRAME",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/cookie-clicker.jpg",
		game: "/built-games/cookieclicker/index.html",
		width: 1080,
		aspectRatio: 3 / 2
	}, {
		name: "Bubble Bobble",
		runner: "EMULATOR_NES",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/bubble-bobble.jpg",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/bubble-bobble.nes",
		aspectRatio: 16 / 15,
		width: 640
	}
];
