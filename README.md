<p align="center">
  <img src="/www/img/dev/banner.png?raw=true" width="50%">
</p>
<h1 align="center">SHSGames</h1>

# Prerequisites
Ensure that you have `NodeJS` installed on your system.

# Getting Started
1. Clone this repo to your working directory, you can use the `download ZIP` option or just run `$ git clone https://github.com/SHSGames/SHSGames`in your CWD.

2. Open the folder named `SHSGames`

3. Install modules using npm `$ npm install` (this has the potential to take a while on dated hardware or slow internet connections)

4. After all the modules are installed, open your IDE or editor in the `SHSGames` folder.

5. Start the development server using `$ npm run dev` (this can also be slow on dated hardware)

6. Navigate to `http://localhost:8080/`

7. Begin developing and happy hacking!

# Testing the Production Build

1. After you verified that the development build works, use `$ npm run build` to build SHSGames into a production ready bundle (also slow on old hardware). The production version is locateed in the `/dist` folder.

2. After the build succeded, use `$ npm run serve` to launch the production instance of SHSGames.

3. The production build is served on `http://localhost/`.

4. Production versions not served from `http://localhost/` will redirect to HTTPS so it is required for professional production enviroments.

5. Production builds have an agressive caching algorithm. Even if the server is shut down, it will display SHSGames. You can use the `Clear cache` option in the settings menu and disable service workers to prevent this.

# General Information

### The `/cached_resources` directory:
This is soley to reduce the cost on our end. We are charged by the gigabyte that is sent from our storage service. By allowing this to fill up with cache, it prevents unexpected and additional charges on our end.
