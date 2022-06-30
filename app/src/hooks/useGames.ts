import { useContext, useEffect, useState } from "react";
import { GunContext } from "../runtime/GunContext";
import hash from "../util/hash";

export default function useGames(): Games.MANIFEST {

	return [];

	// Const [ state, setState ] = useState<Record<string, Games.Game>>({});
	// Const gun = useContext(GunContext);

	// UseEffect(function() {
	// 	Gun.get("shsgames")
	// 		.map()
	// 		.on((game: { data: string, hash: string, id: string }) => {
	// 			If (hash(game.data, 36) !== game.hash) return;
	// 			SetState(state => ({ ...state, [game.id]: JSON.parse(game.data) }));
	// 		});
	// }, [ ]);

	// Return Object.values(state);

}
