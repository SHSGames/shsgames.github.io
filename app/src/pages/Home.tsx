import Toolbar from "../components/Toolbar";

export const path = "/";

export default function Home() {
	return (
		<>
			<Toolbar/>
			<div className="mx-auto max-w-full md:max-w-[80%] w-[1280px] px-12">
				<h1 className="text-3xl">test</h1>
			</div>
		</>
	);
}
