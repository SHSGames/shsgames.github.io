import { Button } from "photoncss/lib/react";
import { useState } from "react";
import logo from "../static/favicon.svg";
import "../styles/App.less";

export default function App() {
	const [ count, setCount ] = useState(0);

	return (
		<div className="App theme--dark">
			<header className="App-header">
				<img src={ logo } className="App-logo" alt="logo" />
				<br /><b></b>
				<p>Hello Vite + React!</p>
				<p>
					<Button variant="raised" onClick={ () => setCount((count) => count + 1) }>count is: { count }</Button>
				</p>
				<p>Edit <code>App.tsx</code> and save to test HMR updates.</p>
				<p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer">Learn React</a>
					{ " | " }
					<a
						className="App-link"
						href="https://vitejs.dev/guide/features.html"
						target="_blank"
						rel="noopener noreferrer">Vite Docs</a>
				</p>
			</header>
		</div>
	);
}
