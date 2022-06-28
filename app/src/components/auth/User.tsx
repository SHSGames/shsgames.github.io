import { useContext } from "react";
import { GunContext } from "../../runtime/GunContext";
import { setOpen } from "./LoginConsent";

export default function User(): JSX.Element {

	// Grab the gun instance
	const gun = useContext(GunContext);

	// Log in
	const user = gun.user();
	user.recall({ sessionStorage: true });
	const { is } = user;

	if (is?.pub === is?.alias) return (
		<div className="flex">
			<div className="btn bg-primary hover:bg-primarymid active:bg-primarydark" onClick={() => setOpen(true)}>login</div>
		</div>
	);

	return (
		<></>
	);
}
