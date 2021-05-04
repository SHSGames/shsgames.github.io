interface Global extends NodeJS.Global {
	Process: NodeJS.Process;
}

declare const global: Global;
