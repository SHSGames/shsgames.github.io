import useUser from "../../hooks/useUser";
import { setOpen as setOpenLoginConsent } from "./LoginConsent";
import MyAccount from "./MyAccount";
import UserMenu, { setOpen as setOpenUserMenu } from "./UserMenu";

export default function User(): JSX.Element | null {

	const user = useUser();
	if (user === null) return null;

	if (user === false) return (
		<div className="flex">
	 		<div className="btn bg-primary hover:bg-primarymid active:bg-primarydark" onClick={() => setOpenLoginConsent(true)}>sign in</div>
	 	</div>
	);

	return (
		<>
			<div className="flex bg-white bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 transition-colors w-12 h-12 rounded-full" onClick={ (e) => {
				setOpenUserMenu(true);
				e.stopPropagation();
			}}>
				<div className="bg-cyan-500 flex w-8 h-8 rounded-full m-2 items-center justify-center">
					<div className="text-white text-xl select-none truncate">{user.username
						.toUpperCase()
						.split(" ")
						.map(a => a[0])
						.join("")
						.substring(0, 2)}</div>
				</div>
			</div>
			<UserMenu user={user}/>
			<MyAccount user={user}/>
		</>
	);
}
