import { useContext, useEffect, useState } from "react";
import { GunContext } from "../runtime/GunContext";
import hash from "../util/hash";

export default function useGames(): SHSGames.MANIFEST {

	const [ state, setState ] = useState<Record<string, SHSGames.Game>>({});
	const gun = useContext(GunContext);

	useEffect(function() {
		gun.get("shsgames")
			.map()
			.on((game: SHSGames.MintedGame) => {
				if (!game) return;
				if (hash(game.data, 36) !== game.hash) return;
				setState(state => ({ ...state, [game.id]: JSON.parse(game.data) }));
			});
	}, [ ]);

	return Object.values(state);

}
