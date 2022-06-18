/* eslint-disable max-classes-per-file */
declare module "jsnes" {

    interface Options {
        onFrame: () => null;
        onAudioSample: () => null;
        onStatusUpdate: () => null;
        onBatteryRamWrite: () => null;
        preferredFrameRate: number;
        emulateSound: boolean;
        sampleRate: number;
    }

    type Controller = 1 | 2;

    type ButtonKey = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

    export class NES {
    	constructor(options?: Partial<Options>);

    	stop(): void;

    	reset(): void;

    	frame(): void;

    	buttonDown(controller: Controller, button: ButtonKey): void;

    	buttonUp(controller: Controller, button: ButtonKey): void;

    	zapperMove(x: number, y: number): void;

    	zapperFireDown(): void;

    	zapperFireUp(): void;

    	getFPS(): number;

    	reloadROM(): void;

    	loadROM(): void;

    	loadROM(data: string): void;

    	setFrameRate(rate: number): void;

    	toJSON(): void;

    	fromJSON(): void;
    }

}
