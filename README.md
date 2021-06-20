# ts-server
[![Test CI](https://github.com/JoshMerlino/ts-server/actions/workflows/test.yml/badge.svg)](https://github.com/JoshMerlino/ts-server/actions/workflows/test.yml)
[![CodeQL](https://github.com/JoshMerlino/ts-server/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/JoshMerlino/ts-server/actions/workflows/codeql-analysis.yml)

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
git clone https://github.com/JoshMerlino/ts-server -b master --single-branch -o upstream my-server
```

Move into your new working directory.

```bash
# Install node build tools
sudo apt-get install build-essential -y

# Install node modules
npm install
```

## Creating API Endpoints
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
