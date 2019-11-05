## Overview
A `Game` is an object that contains all the information that the app needs to launch it.
For example:
```javascript
{
	name: "Run 3",
	engine: "flash",
	params: {
		options: {
			framerate: "60",
			wmode: "direct",
			"data-target": "game.game"
		}
	}
}
```
is the `Game` instance for the game `Run 3`.

## General Information
The `name` option is a `String` that has the READABLE name of the game.
This will be processed using [`app.slug`](./App) to convert it into a URL and Human friendly version

`engine` could be any of the registered engines, `flash` | `gba` | `nes` | `snes` | `unity`

The `params` object contains the parameters for rendering and displaying the game window.

`params.aspectRatio` Number, Ex. `4/3`, The game view will have the aspect ratio of `4/3`

`params.width` Number, Ex. `600`, The game view will have the width of `600px`

`params.options` (Only on `flash` engines) Object, This contains all the HTML attributes that will be appended to the flash player.

Ex. `options: { "myFlashVar": "myFlashValue" }` will result in the `<object/>` having the attribute `myFlashVar="myFlashValue"`
