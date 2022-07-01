import classnames from "classnames";
import React, { useContext, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { User } from "../../hooks/useUser";
import { GunContext } from "../../runtime/GunContext";

export let setShown: React.Dispatch<React.SetStateAction<boolean>>;

export type Props = { user: User }
export default function MyAccount({ user }: Props): JSX.Element | null {

	const db = useContext(GunContext);
	const [ isShown, __setShown ] = useState(false);
	setShown = __setShown;

	return (
		<div className={classnames("fixed top-0 left-0 right-0 bottom-0 bg-black/20 z-[11] grid justify-center items-center transition", isShown ? "opacity-100" : "opacity-0 pointer-events-none")}>
			<div className={classnames("bg-white dark:bg-zinc-700 dark:text-white overflow-hidden rounded-2xl shadow-xl flex p-4 flex-col transition-transform", isShown ? "scale-100" : "scale-90", "max-w-[calc(100vw_-_2rem)] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] xl:max-w-[30vw] w-screen")}>
				<h1 className="text-4xl font-unisans whitespace-nowrap text-center flex flex-col relative">My Account
					<IoCloseCircleOutline className="bg-black dark:bg-white !bg-opacity-5 hover:!bg-opacity-10 active:!bg-opacity-20 rounded-full p-1 text-black dark:text-white text-opacity-50 self-end absolute top-0 right-0 m-[2px]" onClick={ () => setShown(false) }/>
				</h1>
				<hr className="dark:border-zinc-600 -mx-4 mt-4"/>

				<div className="h-14 flex items-center">
					<span>Username:</span>
					<input className="bg-transparent grow ml-4 autofill:!bg-amber-500/10 my-2 ring-1 ring-zinc-500/50 outline-none focus:ring-2 focus:ring-primary py-1.5 px-3 rounded-xl" placeholder={user.username} defaultValue={user.username} type="text" name="username"/>
				</div>
				<hr className="dark:border-zinc-600 -mx-4"/>
				<div className="h-14 flex items-center">
					<span>Email Address:</span>
					<input className="bg-transparent grow ml-4 autofill:!bg-amber-500/10 my-2 ring-1 ring-zinc-500/50 outline-none focus:ring-2 focus:ring-primary py-1.5 px-3 rounded-xl invalid:!ring-red-500" placeholder={user.email} defaultValue={user.email} type="email" name="email"/>
				</div>

				<hr className="dark:border-zinc-600 -mx-4 mb-4"/>
				<pre className="overflow-hidden">
					<code>
						{JSON.stringify(user, null, 2)}
					</code>
				</pre>
			</div>
		</div>
	);
}
