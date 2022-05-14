import { ReactNode } from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { setState } from "./Drawer";
import ThemeToggle from "./ThemeToggle";

export type ToolbarProps = { children?: ReactNode | string, fragment?: boolean };

export default function Toolbar({ children, fragment = false }: ToolbarProps): JSX.Element {

	function Wrapper({ children }: { children?: ReactNode }): JSX.Element {
		if (fragment) return <>{ children }</>;
		return <div className="sticky top-0 min-h-16 left-0 w-full bg-header z-[8] transition-shadow">{ children }</div>;
	}

	return (
		<Wrapper>
			<div className="flex flex-wrap">
				<div className="hover:bg-black/10 hover:active:bg-white/10 w-12 h-12 m-2 items-center flex justify-center rounded-full -mr-2 xl:hidden waves-effect waves-ink" onClick={ () => setState(true) }>
					<MdMenu className="text-white text-[24px]"/>
				</div>
				<h1 className="text-xl text-white leading-[4rem] px-4 select-none font-title">
					<Link to="/">{ APP_MANIFEST.name }</Link>
					{ children && <><span className="opacity-50"> / </span> { children }</> }
				</h1>
				<div className="p-2 ml-auto">
					<ThemeToggle/>
				</div>
			</div>
		</Wrapper>
	);
}
