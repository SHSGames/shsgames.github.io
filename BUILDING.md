# Build Instructions

### Prerequisites
Have the following installed
* git version 2.25.1+
* node version 14.17.4+
* npm version 6.14.14+

### Clone the repository & add its upstream
```bash
git clone https://github.com/SHSGames/shsgames.github.io.git shsgames
cd shsgames
git remote add upstream https://github.com/JoshMerlino/tsx-app.git
```

### Install build tools and node modules
```bash
sudo apt-get install build-essential -y
npm install
```

### Building
```bash
npm run build
```

### Running the app
With the integrated server:
* Run `npm start` to run the server

With your own server:
* Copy the contents of the `public_html` folder to your web root.
* Ensure all 404 errors are automaticly rerouted to `index.html` or `404.html`. Example: [src/runtime/static.ts:9](https://github.com/SHSGames/shsgames.github.io/blob/master/src/runtime/static.ts#L9)
