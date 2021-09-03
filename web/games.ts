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

	// IFRAME GAMES
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
		name: "Tanuki Sunset",
		runner: "IFRAME",
		game: "/buil-games/takumiraccoon/index.html",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/tanuki-sunset.jpg",
		width: 800,
		aspectRatio: 800 / 660
	},

	// UNITY GAMES
	{
		name: "Slope",
		runner: "UNITY",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/slope_v7.json",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/slope.jpg",
		aspectRatio: 16 / 9,
		width: 1200
	}, {
		name: "Duck Life 4",
		runner: "UNITY",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/dl4.json",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/duck-life-4.jpg",
		aspectRatio: 16 / 9,
		width: 1200
	}, {
		name: "Falling Ball",
		runner: "UNITY",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/slope-ball.json",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/falling-ball.jpg",
		aspectRatio: 16 / 9,
		width: 1200
	}, {
		name: "Rooftop Snipers",
		runner: "UNITY",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/rooftop_snipers.json",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/rooftop-snipers.jpg",
		aspectRatio: 16 / 9,
		width: 793
	}, {
		name: "Subway Surfers",
		runner: "UNITY",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/surfers.json",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/subway-surfers.jpg",
		aspectRatio: 16 / 9,
		width: 1200
	},

	// NES GAMES
	{
		name: "Bubble Bobble",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/bubble-bobble.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/bubble-bobble.jpg"
	}, {
		name: "Blades of Steel",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/blades-of-steel.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/blades-of-steel.jpg"
	}, {
		name: "Castlevania",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/castlevania.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/castlevania.jpg"
	}, {
		name: "Clu Clu Land",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/clu-clu-land.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/clu-clu-land.jpg"
	}, {
		name: "Contra",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/contra.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/contra.jpg"
	}, {
		name: "Donkey Kong",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/donkey-kong.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/donkey-kong.jpg"
	}, {
		name: "Double Dribble",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/double-dribble.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/double-dribble.jpg"
	}, {
		name: "Dr. Mario",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/dr-mario.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/dr-mario.jpg"
	}, {
		name: "DuckTales",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/ducktales.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/ducktales.jpg"
	}, {
		name: "Earthbound Zero",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/earthbound-zero.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/earthbound-zero.jpg"
	}, {
		name: "Excitebike",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/excitebike.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/excitebike.jpg"
	}, {
		name: "Final Fantasy",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/final-fantasy-1.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/final-fantasy-1.jpg"
	}, {
		name: "Final Fantasy 2",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/final-fantasy-ii.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/final-fantasy-ii.jpg"
	}, {
		name: "Final Fantasy 3",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/final-fantasy-iii.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/final-fantasy-iii.jpg"
	}, {
		name: "Galaga",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/galaga.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/galaga.jpg"
	}, {
		name: "Hoops",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/hoops.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/hoops.jpg"
	}, {
		name: "Ice Hockey",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/ice-hockey.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/ice-hockey.jpg"
	}, {
		name: "Ice Hockey - Blue Ice Edition",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/ice-hockey---blue-ice-edition.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/ice-hockey---blue-ice-edition.jpg"
	}, {
		name: "Kid Icarus",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/kid-icarus.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/kid-icarus.jpg"
	}, {
		name: "Kirby's Adventure",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/kirbys-adventure.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/kirbys-adventure.jpg"
	}, {
		name: "Legend of Zelda",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/legend-of-zelda.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/legend-of-zelda.jpg"
	}, {
		name: "Mega Man",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/mega-man.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/mega-man.jpg"
	}, {
		name: "Metroid",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/metroid.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/metroid.jpg"
	}, {
		name: "NCAA Football 2020",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/ncaa-football-2020.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/ncaa-football-2020.jpg"
	}, {
		name: "NFL",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/nfl.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/nfl.jpg"
	}, {
		name: "Q-Bert",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/q-bert.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/q-bert.jpg"
	}, {
		name: "RC Pro-AM",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/rc-pro-am.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/rc-pro-am.jpg"
	}, {
		name: "Super Mario Bros.",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/super-mario-bros.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/super-mario-bros.jpg"
	}, {
		name: "Super Mario Bros. 2",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/super-mario-bros-2.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/super-mario-bros-2.jpg"
	}, {
		name: "Super Mario Bros. 3",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/super-mario-bros-3.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/super-mario-bros-3.jpg"
	}, {
		name: "Tecmo Bowl",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/tecmo-bowl.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/tecmo-bowl.jpg"
	}, {
		name: "Tecmo Super Bowl",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/tecmo-super-bowl.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/tecmo-super-bowl.jpg"
	}, {
		name: "Teenage Mutant Ninja Turtles",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/teenage-mutant-ninja-turtles.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/teenage-mutant-ninja-turtles.jpg"
	}, {
		name: "Tetris NES",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/tetris-nes.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/tetris-nes.jpg"
	}, {
		name: "Totally Rad",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/totally-rad.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/totally-rad.jpg"
	}, {
		name: "Yoshi's Cookie",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/yoshis-cookie.nes",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/yoshis-cookie.jpg"
	},

	// GBA GAMES
	{
		name: "Advance Wars",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/advance-wars.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/advance-wars.jpg"
	}, {
		name: "Advance Wars 2",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/advance-wars-2.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/advance-wars-2.jpg"
	}, {
		name: "Castlevania - Aria of Sorrow",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/castlevania---aria-of-sorrow.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/castlevania---aria-of-sorrow.jpg"
	}, {
		name: "Fire Emblem",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/fire-emblem.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/fire-emblem.jpg"
	}, {
		name: "Golden Sun",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/golden-sun.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/golden-sun.jpg"
	}, {
		name: "Mario Kart",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/mario-kart.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/mario-kart.jpg"
	}, {
		name: "Mario Party Advance",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/mario-party-advance.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/mario-party-advance.jpg"
	}, {
		name: "Pacman World",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pacman-world.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pacman-world.jpg"
	}, {
		name: "Pokemon Ash Gray",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-ash-gray.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-ash-gray.jpg"
	}, {
		name: "Pokemon Dark Violet",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-dark-violet.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-dark-violet.jpg"
	}, {
		name: "Pokemon Emerald",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-emerald.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-emerald.jpg"
	}, {
		name: "Pokemon Flora Sky",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-flora-sky.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-flora-sky.jpg"
	}, {
		name: "Pokemon Glazed",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-glazed.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-glazed.jpg"
	}, {
		name: "Pokemon Green",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-green.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-green.jpg"
	}, {
		name: "Pokemon Light Platinum",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-light-platinum.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-light-platinum.jpg"
	}, {
		name: "Pokemon Ruby",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-ruby.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-ruby.jpg"
	}, {
		name: "Pokemon Sapphire",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-sapphire.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-sapphire.jpg"
	}, {
		name: "Pokemon Red",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-red.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-red.jpg"
	}, {
		name: "Pokemon X & Y",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-x-and-y.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-x-&-y.jpg"
	}, {
		name: "Sonic Advance",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/sonic-advance.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/sonic-advance.jpg"
	}, {
		name: "Wario Ware",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/wario-ware.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/wario-ware.jpg"
	}

];
