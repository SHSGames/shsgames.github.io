import { useContext } from "react";
import useUser from "../../hooks/useUser";
import { GunContext } from "../../runtime/GunContext";
import { setOpen } from "./LoginConsent";

export default function User(): JSX.Element {

	const user = useUser();
	const db = useContext(GunContext);

	if (user === null) return <></>;

	if (user === false) return (
		<div className="flex">
	 		<div className="btn bg-primary hover:bg-primarymid active:bg-primarydark" onClick={() => setOpen(true)}>login</div>
	 	</div>
	);

	console.log(user);

	return (
		<div className="flex bg-white bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 transition-colors w-12 h-12 rounded-full">
			<div className="bg-cyan-500 flex w-8 h-8 rounded-full m-2 items-center justify-center">
				<div className="text-white text-xl select-none overflow-hidden">{user.username
					.split(" ")
					.map(a => a[0])
					.join("")}</div>
			</div>
		</div>
	);
}
