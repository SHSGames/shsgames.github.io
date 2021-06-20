# ts-server
### Checks
* [![Build](https://github.com/JoshMerlino/ts-server/actions/workflows/build.yml/badge.svg)](https://github.com/JoshMerlino/ts-server/actions/workflows/build.yml)
* [![Code Quality Analysis](https://github.com/JoshMerlino/ts-server/actions/workflows/code-quality-analysis.yml/badge.svg)](https://github.com/JoshMerlino/ts-server/actions/workflows/code-quality-analysis.yml)
* [![Code Style Analysis](https://github.com/JoshMerlino/ts-server/actions/workflows/code-style-analysis.yml/badge.svg)](https://github.com/JoshMerlino/ts-server/actions/workflows/code-style-analysis.yml)
* [![Test CI](https://github.com/JoshMerlino/ts-server/actions/workflows/test-ci.yml/badge.svg)](https://github.com/JoshMerlino/ts-server/actions/workflows/test-ci.yml)

### Software
* ubuntu-20.04.1lts
* git-2.25.1
* node-14.16.0
* npm-6.14.11

## Getting Started
```bash
# Clone the repo
git clone https://github.com/JoshMerlino/tsx-app -b master --single-branch -o upstream my-server
```

Move into your new working directory.

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
}
```

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

## Bundles
Branches with the `bundle-` prefix contain additional prebuild features such a theme toggle or a persistant shell.
In your project, merge that bundle into master to add those features.
