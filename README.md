# Create single page applications using PhotonCSS

All you really need to do is
```bash
# Install node modules
$ npm install

# Update PhotonCSS to the latest version
$ npm install photoncss@latest -D
```

Add custom themes to `src/index.less` after Photon is imported,

All your pages (views) are in `src/views` Look at the examples to break them down.

### Resolving Static assets:
This is a bit diffrent, you have retrieve them from the static folder,
Example: if you have `src/static/image1.png`, you would resolve that as
```javascript
<img src={app.static("image1.png")} />
```

### Run dev server
```bash
$ npm run dev
```

### Build production version
```bash
$ npm run build
```
build output is served from `public_html/`

### Making API's
1. Make an `api` folder in the projects root.
2. Add API endpoints in subdirectory's there.

`~/api/v1/myapi.js`
```js
export default (req, res) => new Promise(async function(resolve, reject) {
	resolve({ data: "hello world!" });
});
```

`GET` `/api/v1/myapi` =>
```json
{
    "success": true,
    "data": "hello world!"
}
```
