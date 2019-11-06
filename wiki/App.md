## Overview
The `app` object contains many methods that can control SHSGames, for example: launching games, changing settings, ect. all are done through methods in the `app` object.

---

### getCookie
`app.getCookie(String name)`

returns a `String` of the value of the cookie named _`name`_

---

### getGames
`app.getGames()`

Returns an array of [`Game`](./Game) instances.
```javascript
const games = app.getGames()
console.log(games)
```

---

### launch
`app.launch(Game game[, Redirectable redirect])`

Launching games are done through this method.
Once called, SHSGames will ask the user to make sure there computer is on mute and launch the game.

Read also: [Game](./Game), [Redirectable](./Redirectable).

---

### random
`app.random()`
Returns a [`Game`](./Game) instance.

```javascript
const randomGame = app.random()
console.log(randomGame);
```

---

### setCookie
`app.setCookie(String name, String, value[, Number seconds])`

Sets a cookie with the name _`name`_, the value _`value`_ that expires in _`seconds`_ seconds (default: Never)

---

### setDarkMode
`app.setDarkMode(boolean dark)`

If `dark === true`, SHSGames will apply all the styles from `/src/less/overrides-dark.less`
If `dark === false`, SHSGames will revert back to the original light theme.

---

### slug
`app.slug(String str)`

Converts a Human readable string like `Henry Stickmin - Stealing the Diamond` to a URL friendly version like `henry-stickmin---stealing-the-diamond`

---

### update
`app.update()`

Displays an updating message and hard reloads the browser. This will clear all cache stored by SHSGames.
