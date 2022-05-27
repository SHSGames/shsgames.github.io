export default function GameRunner(): JSX.Element {
	console.log(location.search);
	return (
		<span>{location.search}</span>
	);
}
