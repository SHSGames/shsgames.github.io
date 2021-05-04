# ts-package
[![Rebuild CI](https://github.com/JoshMerlino/ts-package/actions/workflows/rebuild.yml/badge.svg?branch=master)](https://github.com/JoshMerlino/ts-package/actions/workflows/rebuild.yml)

## Initial set-up
The following software is installed:
* ubuntu-20.04.1lts
* git-2.25.1
* node-14.15.4
* npm-6.14.10

### Cloning the source code
```bash
# Clone the repo
git clone https://github.com/JoshMerlino/ts-package -o upstream my-package

# Move into working directory
cd my-package
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
```
