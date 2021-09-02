export type GameRunner = "EMULATOR_GBA" | "EMULATOR_SNES" | "EMULATOR_SNES" | "IFRAME" | "UNITY";
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
	}
];
