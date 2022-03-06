import { useState } from "react";
import { Button } from "photoncss/lib/react";

export default function App() {
	const [ count, setCount ] = useState(0);

	return (
		<Button
			variant="raised"
			color="primary"
			onClick={ () => setCount((count) => count + 1) }>count is: { count }</Button>
	);
}
