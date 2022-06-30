import GUN, { IGunInstance } from "gun";
import "gun/sea";
import { createContext } from "react";

export const gun = new GUN([
	"https://gun.joshmerlino.me/gun"
]);

export const GunContext = createContext<IGunInstance<any>>(gun);
export default function GunProvider({ children }: { children: React.ReactNode }) {
	return <GunContext.Provider value={gun}>{ children }</GunContext.Provider>;
}
