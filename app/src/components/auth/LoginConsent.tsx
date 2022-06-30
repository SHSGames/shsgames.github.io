import classnames from "classnames";
import { nanoid } from "nanoid";
import { Dispatch, SetStateAction, useContext, useRef, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { User } from "../../hooks/useUser";
import { GunContext } from "../../runtime/GunContext";

export let setOpen: Dispatch<SetStateAction<boolean>>;

export default function LoginConsent(): JSX.Element {

	const db = useContext(GunContext);
	const [ mode, setMode ] = useState(false);
	const userRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwRef = useRef<HTMLInputElement>(null);
	const passwcRef = useRef<HTMLInputElement>(null);

	const [ isOpen, _setOpen ] = useState(false);
	setOpen = _setOpen;

	function login() {
		const email = emailRef.current!.value;
		const passwd = passwRef.current!.value;
		db.user().auth(email, passwd, resp => {
			if (!resp.hasOwnProperty("err")) {
				setOpen(false);
			}
		});
	}

	function signup() {
		const username = userRef.current!.value;
		const email = emailRef.current!.value;
		const passwd = passwRef.current!.value;
		const passwdc = passwcRef.current!.value;

		if (passwd !== passwdc) throw new Error("Passwords dont match");

		db.user().create(email, passwd, resp => {
			if ("err" in resp) throw new Error(resp.err);
			db.user(resp.pub)
				.get("user")
				.put<User>({
					username,
					email,
					uuid: nanoid(),
					created_at: Date.now()
				});
			login();
		});
	}

	return (
		<div className={classnames("fixed top-0 left-0 right-0 bottom-0 bg-black/20 z-[11] grid justify-center items-center transition", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
			<div className={classnames("bg-white dark:bg-zinc-700 dark:text-white overflow-hidden rounded-2xl shadow-xl flex p-4 flex-col transition-transform", isOpen ? "scale-100" : "scale-90", "max-w-[calc(100vw_-_2rem)] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] xl:max-w-[30vw] w-screen")}>
				<h1 className="text-4xl font-unisans whitespace-nowrap text-center flex flex-col relative mb-1">{mode ? "Sign up" : "Sign in"}
					<IoCloseCircleOutline className="bg-black dark:bg-white !bg-opacity-5 hover:!bg-opacity-10 active:!bg-opacity-20 rounded-full p-1 text-black dark:text-white text-opacity-50 self-end absolute top-0 right-0 m-[2px]" onClick={ () => setOpen(false) }/>
				</h1>
				<hr className="dark:border-zinc-600 -mx-4 my-3"/>
				{ mode === true && <input className="bg-transparent autofill:!bg-amber-500/10 my-2 ring-1 ring-zinc-500/50 outline-none focus:ring-2 focus:ring-primary py-1.5 px-3 rounded-xl" placeholder="Username" type="text" id="username" ref={userRef}/> }
				<input className="bg-transparent autofill:!bg-amber-500/10 my-2 ring-1 ring-zinc-500/50 outline-none focus:ring-2 focus:ring-primary py-1.5 px-3 rounded-xl" placeholder="Email address" type="email" id="email_address" ref={emailRef}/>
				<input className="bg-transparent autofill:!bg-amber-500/10 my-2 ring-1 ring-zinc-500/50 outline-none focus:ring-2 focus:ring-primary py-1.5 px-3 rounded-xl" placeholder="Password" type="password" id="password" ref={passwRef}/>
				{ mode === true && <input className="bg-transparent autofill:!bg-amber-500/10 my-2 ring-1 ring-zinc-500/50 outline-none focus:ring-2 focus:ring-primary py-1.5 px-3 rounded-xl" placeholder="Confirm Password" type="password" id="password_confirm" ref={passwcRef}/> }
				<div className="flex -m-1 pt-2">
					{ mode ? <p className="text-primary cursor-pointer underline select-none ml-1 mt-5" onClick={() => setMode(false)}>Sign in instead</p> : <p className="text-primary cursor-pointer underline select-none ml-1 mt-5" onClick={() => setMode(true)}>Create account</p> }
					<div className="grow"></div>
					{ mode ? <div className="btn ml-auto bg-primary hover:bg-primarymid active:bg-primarydark" onClick={signup}>create account</div> : <div className="btn ml-auto bg-primary hover:bg-primarymid active:bg-primarydark" onClick={login}>Sign in</div> }
				</div>
			</div>
		</div>
	);

}
