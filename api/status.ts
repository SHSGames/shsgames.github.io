import si from "systeminformation";
import { Request, Response } from "express";
import { store } from "../src/statTracker";

// Ensure this API is bound to `/api/status`
export const route = "status";

// Interface for profileHardware() shape
export interface IHardware {
	cpu: {
		manufacturer: string;
        brand: string;
        speed: number;
        speedMax: number;
        cores: number;
	};
	graphics: {
		controllers: {
			vendor: string;
		    model: string;
		    bus: string;
		    vram: number;
		    vramDynamic: boolean;
		}[]
	}
	mem: {
		total: number;
		free: number;
		used: number;
		swaptotal: number;
		swapfree: number;
		swapused: number;
	};
	memLayout: {
		size: number;
        clockSpeed: number;
        type: string;
        formFactor: string;
	}[];
	network: {
		ping: number;
	};
	networkInterfaces: {
		iface: string;
		virtual: string;
		operstate: string;
		type: string;
		duplex: string;
		speed: number;
	};
	osInfo: {
		platform: string;
		distro: string;
		release: string;
		codename: string;
		kernel: string;
	};
	system: {
		manufacturer: string;
		model: string;
		version: number;
		virtual: boolean;
	};
	time: {
		timezone: string;
		uptime: number;
	};
}

// Function to profile hardware
export async function profileHardware(): Promise<IHardware> {
	return {
		...await si.get({
			cpu: "manufacturer, brand, speed, speedMax, cores",
			graphics: "controllers",
			mem: "total, free, used, swaptotal, swapfree, swapused",
			memLayout: "size, clockSpeed, type, formFactor",
			osInfo: "platform, distro, release, codename, kernel",
			system: "manufacturer, model, version, virtual",
			networkInterfaces: "iface, virtual, operstate, type, duplex, speed",
			time: "uptime, timezone"
		}),
		network: {
			ping: await si.inetLatency()
		}
	};
}

// Initialize hardware monitoring
let hardware: IHardware | null = null;
setInterval(async () => hardware = await profileHardware(), 1000);

// Export API runtime
export default async function api(_req: Request, res: Response): Promise<void> {

	// Read stats from store
	const stats = store.value;

	// Function to compute the average response time for a given window.
	function averageResponseTime(ms: number): number {

		// Get time window
		const window = Date.now() - ms;

		// Get list of request timestamps to compute
		const requests = Object.keys(stats.responseTimes).filter(key => {
			const timestamp = parseInt(key);
			return timestamp > window;
		});

		// Get all durations
		const values: number[] = [];
		for (const request of requests) values.push(stats.responseTimes[request]);

		// Return average
		const avg = values.reduce((a, b) => a + b, 0) / values.length;
		return Math.floor(avg * 100) / 100;

	}

	// Function to compute the average response time for a given window.
	function averageRequestsPerSecond(ms: number): number {

		// Get time window
		const window = Date.now() - ms;

		// Get list of request timestamps to compute
		const requests = Object.keys(stats.responseTimes).filter(key => {
			const timestamp = parseInt(key);
			return timestamp > window;
		});

		// Get all durations
		const values: number[] = [];
		for (const request of requests) values.push(stats.responseTimes[request]);

		// Return average
		const avg = values.length / (ms / 1000);
		return Math.floor(avg * 100) / 100;

	}

	// Function to compute the average response time for a given window.
	function requestsPerWindow(ms: number): number {

		// Get time window
		const window = Date.now() - ms;

		// Get list of request timestamps to compute
		const requests = Object.keys(stats.responseTimes).filter(key => {
			const timestamp = parseInt(key);
			return timestamp > window;
		});

		// Get all durations
		const values: number[] = [];
		for (const request of requests) values.push(stats.responseTimes[request]);

		// Return average
		return values.length;

	}

	if (hardware === null) hardware = await profileHardware();

	// Return stats
	res.json({
		hardware,
		server: {
			averageResponseTime: {
				"1m": averageResponseTime(60*1000),
				"5m": averageResponseTime(5*60*1000),
				"15m": averageResponseTime(15*60*1000),
				"30m": averageResponseTime(30*60*1000),
				"60m": averageResponseTime(60*60*1000),
				"2h": averageResponseTime(2*60*60*1000),
				"4h": averageResponseTime(4*60*60*1000),
				"8h": averageResponseTime(8*60*60*1000),
				"12h": averageResponseTime(12*60*60*1000),
				"24h": averageResponseTime(24*60*60*1000)
			},
			averageRequestsPerSecond: {
				"1m": averageRequestsPerSecond(60*1000),
				"5m": averageRequestsPerSecond(5*60*1000),
				"15m": averageRequestsPerSecond(15*60*1000),
				"30m": averageRequestsPerSecond(30*60*1000),
				"60m": averageRequestsPerSecond(60*60*1000),
				"2h": averageRequestsPerSecond(2*60*60*1000),
				"4h": averageRequestsPerSecond(4*60*60*1000),
				"8h": averageRequestsPerSecond(8*60*60*1000),
				"12h": averageRequestsPerSecond(12*60*60*1000),
				"24h": averageRequestsPerSecond(24*60*60*1000)
			},
			requestsPerWindow: {
				"1m": requestsPerWindow(60*1000),
				"5m": requestsPerWindow(5*60*1000),
				"15m": requestsPerWindow(15*60*1000),
				"30m": requestsPerWindow(30*60*1000),
				"60m": requestsPerWindow(60*60*1000),
				"2h": requestsPerWindow(2*60*60*1000),
				"4h": requestsPerWindow(4*60*60*1000),
				"8h": requestsPerWindow(8*60*60*1000),
				"12h": requestsPerWindow(12*60*60*1000),
				"24h": requestsPerWindow(24*60*60*1000)
			}
		}
	});

}
