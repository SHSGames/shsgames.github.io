# react-app
[![Rebuild CI](https://github.com/JoshMerlino/react-app/actions/workflows/rebuild.yml/badge.svg?branch=master)](https://github.com/JoshMerlino/react-app/actions/workflows/rebuild.yml)

Create single page applications using PhotonCSS that are fast as sh!t
![100% Score in Lighthouse](https://i.ibb.co/tctcbvR/ezgif-3-9a5c3774d3c5.gif)

## Initial set-up
The following software is installed:
* ubuntu-20.04.1lts
* git-2.25.1
* node-14.15.4
* npm-6.14.10

### Cloning the source code
```bash
# Clone the repo
git clone https://github.com/JoshMerlino/react-app -o upstream my-app

# Move into working directory
cd my-app
```

### Updating the base and merging into existing code
```bash
# Fetch
git fetch

# Pull upstream and rebase into master
git pull upstream --set-upstream master
```

### Install modules
```bash
# Install node build tools
sudo apt-get install build-essential -y

# Install node modules
npm install

# Update PhotonCSS to the latest version
npm install photoncss@latest -D
```
### Configure your app
Change the information in `~/my-app/src/manifest.json` to reflect your app's PWA manifest

## Developing

### Creating API Endpoints
Create a `.ts` file in the `~/api` directory
```typescript
import { Request, Response } from "express";

export const route = [
	"v1/test",
	"v1/test/**"
];

export default function api(req: Request, res: Response): void {
	res.json({});
```
}

### Creating views (pages)
1. Create a file in the `views` folder

`~/my-app/src/ts/views/Index.tsx`
```js
import React from "react";

// Export the title of the tab
export const title = "My Page";

// Export the path of the page to render
export const route = "/";

// Export view
export default function() {
	return <>get started by editing `~/my-app/src/ts/views/Index.tsx::View`</>
}
```

### Resolve static assets
1. Put the asset in the `static` folder. ex: `~/my-app/src/static/image1.png`
2. To resolve the asset use the `app.static()` method

```js
<img src={app.static("image1.png")} />
```