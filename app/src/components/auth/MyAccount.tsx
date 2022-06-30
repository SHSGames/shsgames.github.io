import classnames from "classnames";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { User } from "../../hooks/useUser";

export let setShown: React.Dispatch<React.SetStateAction<boolean>>;

export type Props = { user: false | User | null }
export default function MyAccount({ user }: Props): JSX.Element {

	const [ isShown, __setShown ] = useState(false);
	setShown = __setShown;

	return (
		<div className={classnames("fixed top-0 left-0 right-0 bottom-0 bg-black/20 z-[11] grid justify-center items-center transition", isShown ? "opacity-100" : "opacity-0 pointer-events-none")}>
			<div className={classnames("bg-white dark:bg-zinc-700 dark:text-white overflow-hidden rounded-2xl shadow-xl flex p-4 flex-col transition-transform", isShown ? "scale-100" : "scale-90", "max-w-[calc(100vw_-_2rem)] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] xl:max-w-[30vw] w-screen")}>
				<h1 className="text-4xl font-unisans whitespace-nowrap text-center flex flex-col relative">My Account
					<IoCloseCircleOutline className="bg-black dark:bg-white !bg-opacity-5 hover:!bg-opacity-10 active:!bg-opacity-20 rounded-full p-1 text-black dark:text-white text-opacity-50 self-end absolute top-0 right-0 m-[2px]" onClick={ () => setShown(false) }/>
				</h1>
				<pre className="overflow-hidden">
					<code>
						{JSON.stringify(user, null, 2)}
					</code>
				</pre>
			</div>
		</div>
	);
}
