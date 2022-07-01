import Gun, { IGunInstance } from "gun";
import "gun/sea";
import { createContext } from "react";

export const gun = new Gun([
	"http://joshmerlino.me:3333/gun",
	"https://gun-manhattan.herokuapp.com/gun"
]);

export const GunContext = createContext<IGunInstance<any>>(gun);
export default function GunProvider({ children }: { children: React.ReactNode }) {
	return <GunContext.Provider value={gun}>{ children }</GunContext.Provider>;
}
