import classnames from "classnames";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

export let setOpen: Dispatch<SetStateAction<boolean>>;

export default function LoginConsent(): JSX.Element {

	const [ isOpen, _setOpen ] = useState(false);
	setOpen = _setOpen;

	return (
		<div className={classnames("fixed top-0 left-0 right-0 bottom-0 bg-black/20 z-[6] grid justify-center items-center transition", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
			<div className={classnames("bg-white dark:bg-zinc-700 dark:text-white overflow-hidden rounded-2xl shadow-xl flex p-4 flex-col transition-transform", isOpen ? "scale-100" : "scale-90", "max-w-[calc(100vw_-_2rem)] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] xl:max-w-[30vw] w-screen")}>
				<h1 className="text-4xl font-unisans whitespace-nowrap text-center flex flex-col relative">Log In
					<IoCloseCircleOutline className="bg-black dark:bg-white !bg-opacity-5 hover:!bg-opacity-10 active:!bg-opacity-20 rounded-full p-1 text-black dark:text-white text-opacity-50 self-end absolute top-0 right-0 m-[2px]" onClick={ () => setOpen(false) }/>
				</h1>
				<div className="flex">
                    lol
				</div>
			</div>
		</div>
	);

}
