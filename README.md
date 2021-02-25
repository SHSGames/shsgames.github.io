# react-app
Create single page applications using PhotonCSS

## Initial set-up
The following software is installed:
* ubuntu-20.04.1lts
* git-2.25.1
* node-14.15.4
* npm-6.14.10

### Cloning the source code
```bash
# Clone the repo
git clone https://github.com/PhotonCSS/react-app -o upstream my-app

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

### Creating API endpoints
1. Make an `api` folder in the projects root.
2. Add API endpoints in subdirectory's there.

`~/my-app/api/v1/myapi.js`
```js
export default (req, res) => new Promise(async function(resolve, reject) {
	resolve({ data: "hello world!" });
});
```

`HTTP 1.1` `GET` http://localhost:4000/api/v1/myapi
```json
{
    "success": true,
    "data": "hello world!"
}
```

### Creating components
1. Create a file in the `components` folder
2. Import components using `import MyComponent from "components/MyComponent";`

`~/my-app/src/components/MyComponent.js`
```js
import React from "react";

// Export the component
export default function MyComponent() {
	return (
		<div>
			My Component
		</div>
	)
}
```

### Creating views (pages)
1. Create a file in the `views` folder

`~/my-app/src/views/Index.js`
```js
import React, { Fragment } from "react";

// Export the path of the page to render
export const route = "/";

// Export view
export default function() {
	return (
		<Fragment>
			get started by editing `~/my-app/src/views/Index.js::View`
		</Fragment>
	)
}
```

### Resolve static assets
1. Put the asset in the `static` folder. ex: `~/my-app/src/static/image1.png`
2. To resolve the asset use the `app.static()` method

```js
<img src={app.static("image1.png")} />
```
