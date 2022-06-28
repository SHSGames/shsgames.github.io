import { useEffect, useState } from "react";
import GameManager from "../util/GameManager";
import hash from "../util/hash";

const gun = Gun([ "https://gun.joshmerlino.me/gun" ]);

export const gamemanager = new GameManager(gun);

export default function useGames(): [ Games.MANIFEST, GameManager ]{

	const [ state, setState ] = useState<Record<string, Games.Game>>({});

	useEffect(function() {
		gun.get("shsgames")
			.map()
			.on((game: { data: string, hash: string, id: string }) => {
				if (hash(game.data, 36) !== game.hash) return;
				setState(state => ({ ...state, [game.id]: JSON.parse(game.data) }));
			});
	}, [ ]);

	return [ Object.values(state), gamemanager ];

}
