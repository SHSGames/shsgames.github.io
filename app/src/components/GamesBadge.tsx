import useGames from "../hooks/useGames";

export default function GamesBadge(): JSX.Element {
	const games = useGames();
	return (
		<div className="bg-cyan-500 text-white font-bold px-3 py-1 rounded-full mx-4 h-7 text-[14px]">{games.length} Game{games.length === 1 ? "" : "s"}</div>
	);
}
