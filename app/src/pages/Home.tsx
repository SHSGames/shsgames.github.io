import Games from "../components/Games";
import Toolbar from "../components/Toolbar";

export const path = "/";

export default function Home() {
	return (
		<>
			<Toolbar/>
			<div className="mx-auto max-w-full xl:max-w-[90%] w-full xl:px-12 lg:px-6 px-2 pb-2">
				<Games/>
			</div>
		</>
	);
}
