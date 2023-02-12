export type GameRunner = "EMULATOR_GBA" | "EMULATOR_NES" | "IFRAME" | "UNITY" | "RUFFLE";
export interface Game {
	name: string;
	runner: GameRunner;
	thumbnail: string;
	game: string;
	aspectRatio?: number;
	width?: number;
}

export default <Game[]>[

	// PARKER GAMES
	{
		name: "prkr's Agario",
		runner: "IFRAME",
		game: "https://jptragar.glitch.me/",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/prkrs-agario.jpg",
		width: 1200,
		aspectRatio: 16 / 9
	},

	// IFRAME GAMES
	{
		name: "1v1.lol",
		runner: "IFRAME",
		game: "https://ejvd3326248pklq0mtj313irgbc2vsrb-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/s035r8h4/1v1.xml&amp;container=enterprise&amp;view=default&amp;lang=en&amp;country=ALL&amp;sanitize=0&amp;v=8d01559d545a3200&amp;libs=core&amp;mid=172&amp;parent=https://sites.google.com/site/unblockedgameswtf/1v1-lol#USX6PB",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/1v1lol.png",
		width: 1200,
		aspectRatio: 16 / 9
	}, {
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
		game: "/built-games/CSGOClicker/index.html",
		thumbnail: "https://cdn.jsdelivr.net/gh/joshmerlino/shsg-pfile/thumbs/csgoclicker.jpg",
		width: 1080,
		aspectRatio: 5 / 3
	}, {
		name: "Tanuki Sunset",
		runner: "IFRAME",
		game: "/built-games/takumiraccoon/index.html",
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
		name: "Pokémon Ash Gray",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-ash-gray.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-ash-gray.jpg"
	}, {
		name: "Pokémon Dark Violet",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-dark-violet.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-dark-violet.jpg"
	}, {
		name: "Pokémon Emerald",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-emerald.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-emerald.jpg"
	}, {
		name: "Pokémon Flora Sky",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-flora-sky.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-flora-sky.jpg"
	}, {
		name: "Pokémon Glazed",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-glazed.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-glazed.jpg"
	}, {
		name: "Pokémon Green",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-green.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-green.jpg"
	}, {
		name: "Pokémon Light Platinum",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-light-platinum.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-light-platinum.jpg"
	}, {
		name: "Pokémon Ruby",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-ruby.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-ruby.jpg"
	}, {
		name: "Pokémon Sapphire",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-sapphire.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-sapphire.jpg"
	}, {
		name: "Pokémon Red",
		runner: "EMULATOR_GBA",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pokemon-red.gba",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pokemon-red.jpg"
	}, {
		name: "Pokémon X & Y",
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
	},

	// Flash Games?!?!?!
	{
		name: "4th and Goal 2018",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/4th-and-goal-2018.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/4th-and-goal-2018.jpg",
		width: 800,
		aspectRatio: 800/588
	}, {
		name: "B-Cubed",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/b-cubed.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/b-cubed.jpg",
		width: 800,
		aspectRatio: 80/72
	}, {
		name: "Bloons Tower Defense 2",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/bloons-tower-defense-2.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/bloons-tower-defense-2.jpg",
		width: 800,
		aspectRatio: 4/3
	}, {
		name: "Bloons Tower Defense 1",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/bloons-tower-defense-1.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/bloons-tower-defense-1.jpg",
		width: 800,
		aspectRatio: 4/3
	}, {
		name: "Bloxorz",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/bloxorz.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/bloxorz.jpg",
		width: 800,
		aspectRatio: 11/6
	}, {
		name: "BMX Park",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/bmx-park.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/bmx-park.jpg",
		width: 800,
		aspectRatio: 4/3
	}, {
		name: "Bubble Trouble",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/bubble-trouble.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/bubble-trouble.jpg",
		width: 800,
		aspectRatio: 800/518
	}, {
		name: "Cubefield",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/cubefield.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/cubefield.jpg",
		width: 800,
		aspectRatio: 800/588
	}, {
		name: "Dad N Me",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/dad-n-me.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/dad-n-me.jpg",
		width: 800,
		aspectRatio: 4/3
	}, {
		name: "Dragon Fist 3",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/dragon-fist-3.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/dragon-fist-3.jpg",
		width: 800,
		aspectRatio: 4/3
	}, {
		name: "Dragon Ball Z Devolution",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/dragon-ball-z-devolution.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/dragon-ball-z-devolution.jpg",
		width: 800,
		aspectRatio: 80/47
	}, {
		name: "Duck Life 4",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/ellieeet123/swf/swf/duck-life-4.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/duck-life-4.jpg",
		aspectRatio: 75 / 48,
		width: 750
	}, {
		name: "Duck Life 3",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/duck-life-3.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/duck-life-3.jpg",
		width: 800,
		aspectRatio: 800/502
	 },	{
		name: "Duck Life 2",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/duck-life-2.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/duck-life-2.jpg",
		width: 800,
		aspectRatio: 800/588
	 },	{
		name: "Duck Life 1",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/duck-life-1.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/duck-life-1.jpg",
		width: 800,
		aspectRatio: 4/3
	}, {
		name: "Electric Man 2",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/electric-man-2.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/electric-man-2.jpg",
		width: 800,
		aspectRatio: 80/49
	}, {
		name: "Escape the Bathroom",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/escape-the-bathroom.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/escape-the-bathroom.jpg",
		width: 800,
		aspectRatio: 80/59
	}, {
		name: "Escape the Car",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/escape-the-car.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/escape-the-car.jpg",
		width: 800,
		aspectRatio: 80/59
	}, {
		name: "Escape the Closet",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/escape-the-closet.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/escape-the-closet.jpg",
		width: 800,
		aspectRatio: 80/59
	}, {
		name: "Escape the Freezer",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/escape-the-freezer.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/escape-the-freezer.jpg",
		width: 800,
		aspectRatio: 80/48
	}, {
		name: "Feudalism 2",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/feudalism-2.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/feudalism-2.jpg",
		width: 800,
		aspectRatio: 80/59
	}, {
		name: "Gunblood",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/gunblood.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/gunblood.jpg",
		width: 800,
		aspectRatio: 800/462
	}, {
		name: "Gun Mayhem",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/gun-mayhem.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/gun-mayhem.jpg",
		width: 800,
		aspectRatio: 80/52
	}, { name: "Gun Mayhem 2",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/gun-mayhem-2.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/gun-mayhem-2.jpg",
		width: 800,
		aspectRatio: 80/53
	}, {
		name: "Helicopter",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/helicopter.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/helicopter.jpg",
		width: 800,
		aspectRatio: 4/3
	}, {
		name: "Henry Stickmin - Breaking the Bank",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/henry-stickmin---breaking-the-bank.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/henry-stickmin---breaking-the-bank.jpg",
		width: 800,
		aspectRatio: 80/58
	}, {
		name: "Henry Stickmin - Crossing the Pit",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/henry-stickmin---crossing-the-pit.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/henry-stickmin---crossing-the-pit.jpg",
		width: 800,
		aspectRatio: 4/3
	}, {
		name: "Henry Stickmin - Stealing the Diamond",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/henry-stickmin---stealing-the-diamond.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/henry-stickmin---stealing-the-diamond.jpg",
		width: 800,
		aspectRatio: 4/3
	}, { name: "Impossible Quiz",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/impossible-quiz.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/impossible-quiz.jpg",
		width: 800,
		aspectRatio: 4/3
	}, {
		name: "Impossible Quiz 2",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/impossible-quiz-2.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/impossible-quiz-2.jpg",
		width: 800,
		aspectRatio: 4/3
	}, {
		name: "Kill the Spartan",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/kill-the-spartan.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/kill-the-spartan.jpg",
		width: 800,
		aspectRatio: 800/532
	}, {
		name: "Learn to Fly",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/learn-to-fly.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/learn-to-fly.jpg",
		width: 800,
		aspectRatio: 80/59
	}, {
		name: "Learn to Fly 2",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/learn-to-fly-2.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/learn-to-fly-2.jpg",
		width: 800,
		aspectRatio: 80/59
	}, {
		name: "Line rider 1",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/line-rider-1.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/line-rider-1.jpg",
		width: 800,
		aspectRatio: 4/3
	}, {
		name: "Madness Project Nexus",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/madness-project-nexus.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/madness-project-nexus.jpg",
		width: 800,
		aspectRatio: 4/3
	}, {
		name: "Minesweeper",
		runner: "RUFFLE",
		game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/minesweeper.swf",
		thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/minesweeper.jpg",
		width: 800,
		aspectRatio: 4/3
	}
	// , {
	// 	Name: "Run 2",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/run-2.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/run-2.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3
	// }, {
	// 	Name: "Run 3",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/run-3.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/run-3.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3
	// }
	// { name: "N",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/n.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/n.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Ninja Painter",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/ninja-painter.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/ninja-painter.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Ninja Painter 2",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/ninja-painter-2.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/ninja-painter-2.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Number 1",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/number-1.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/number-1.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Oh Snow!",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/oh-snow!.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/oh-snow!.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Papas Bakeria",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/papas-bakeria.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/papas-bakeria.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Pacman",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pacman.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pacman.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Parking Mania",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/parking-mania.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/parking-mania.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Pinch Hitter Game Day",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pinch-hitter-game-day.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pinch-hitter-game-day.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Pirates of the Stupid Seas",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pirates-of-the-stupid-seas.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pirates-of-the-stupid-seas.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Pitch Hitter 2",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pitch-hitter-2.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pitch-hitter-2.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Pitch Hitter 3",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/pitch-hitter-3.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/pitch-hitter-3.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Poker",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/poker.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/poker.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Potty Racers",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/potty-racers.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/potty-racers.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Potty Racers 3",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/potty-racers-3.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/potty-racers-3.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Plants vs Zombies 2",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/plants-vs-zombies-2.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/plants-vs-zombies-2.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "QWOP",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/qwop.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/qwop.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Raft Wars",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/raft-wars.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/raft-wars.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Raze",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/raze.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/raze.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Raze 3",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/raze-3.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/raze-3.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Return Man 2",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/return-man-2.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/return-man-2.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Run n Gun",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/run-n-gun.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/run-n-gun.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Snail Bob",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/snail-bob.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/snail-bob.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Sports Head Basketball",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/sports-head-basketball.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/sports-head-basketball.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Sports Head Football",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/sports-head-football.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/sports-head-football.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Sports Head Ice Hockey",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/sports-head-ice-hockey.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/sports-head-ice-hockey.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Sports Head Ice Hockey Championship",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/sports-head-ice-hockey-championship.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/sports-head-ice-hockey-championship.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Sports Head Tennis",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/sports-head-tennis.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/sports-head-tennis.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Stick Fighter",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/stick-fighter.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/stick-fighter.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Stick RPG",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/stick-rpg.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/stick-rpg.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Stickwar",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/stickwar.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/stickwar.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Stick War 2",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/stick-war-2.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/stick-war-2.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Street Fighter 2",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/street-fighter-2.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/street-fighter-2.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Strike Force Heroes",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/strike-force-heroes.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/strike-force-heroes.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Street Fighter 2",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/street-fighter-2.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/street-fighter-2.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Strike Force Kitty League",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/strike-force-kitty-league.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/strike-force-kitty-league.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Super Fighters",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/super-fighters.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/super-fighters.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Super Mario 63",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/super-mario-63.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/super-mario-63.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Super Mario Crossover",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/super-mario-crossover.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/super-mario-crossover.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Super Mario Flash",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/super-mario-flash.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/super-mario-flash.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Super Mario Flash 2",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/super-mario-flash-2.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/super-mario-flash-2.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Super Santa Kicker",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/super-santa-kicker.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/super-santa-kicker.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Super Smash Flash",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/super-smash-flash.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/super-smash-flash.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Swords and Sandals 1",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/swords-and-sandals-1.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/swords-and-sandals-1.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Swords and Sandals 2",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/swords-and-sandals-2.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/swords-and-sandals-2.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Swords and Sandals 3",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/swords-and-sandals-3.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/swords-and-sandals-3.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Tetris",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/tetris.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/tetris.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "The Binding of Isaac",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/the-binding-of-isaac.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/the-binding-of-isaac.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "The Flood Runner",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/the-flood-runner.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/the-flood-runner.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "The Flood Runner 2",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/the-flood-runner-2.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/the-flood-runner-2.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "The Flood Runner Armageddon",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/the-flood-runner-armageddon.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/the-flood-runner-armageddon.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "The King of Fighters Wing",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/the-king-of-fighters-wing.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/the-king-of-fighters-wing.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "The Last Stand Union City",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/the-last-stand-union-city.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/the-last-stand-union-city.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Theme Hotel",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/theme-hotel.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/theme-hotel.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "This is the Only Level",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/this-is-the-only-level.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/this-is-the-only-level.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "This is the Only Level Too",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/this-is-the-only-level-too.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/this-is-the-only-level-too.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Tron",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/tron.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/tron.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Truck Loader 4",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/truck-loader-4.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/truck-loader-4.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Unfair Mario",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/unfair-mario.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/unfair-mario.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Vex 1",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/vex-1.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/vex-1.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Vex 2",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/vex-2.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/vex-2.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Warfare 1917",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/warfare-1917.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/warfare-1917.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Worlds Hardest Game",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/worlds-hardest-game.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/worlds-hardest-game.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 },
	// { name: "Zombocalypse 2",
	// 	Runner: "RUFFLE",
	// 	Game: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/zombocalypse-2.swf",
	// 	Thumbnail: "https://cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/thumbs/zombocalypse-2.jpg",
	// 	Width: 800,
	// 	AspectRatio: 4/3 }
];
