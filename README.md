# Create single page applications using PhotonCSS

All you really need to do is
```bash
npm install
npm install --save-dev photoncss
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
npm run dev
```

### Build production version
```bash
npm run Build
```
build output is in `public_html/`
