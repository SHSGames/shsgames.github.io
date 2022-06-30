import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { GunContext } from "../runtime/GunContext";

export type User = {
	username: string;
	email: string;
	uuid: string;
	created_at: number;
}

export let forceSet: Dispatch<SetStateAction<false | User | null>>;

export default function useUser(): User | null | false {

	const [ state, setState ] = useState<User | null | false>(null);
	forceSet = setState;

	const db = useContext(GunContext);
	const user = db.user();

	useEffect(function() {
		user.recall({ sessionStorage: true }, user => {
			if ("err" in user) {
				setState(false);
			} else {
				setState(null);
			}
		});
		if (user.is === undefined) setState(false);
		db.on("auth", function() {
			db.user().get("user")
				.on((a: User) => setState(a));
		});

	}, [ ]);

	return state;

}
