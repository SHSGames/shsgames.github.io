import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListItem, TextIcon } from "photoncss/lib/react";
import { Waves } from "photoncss";
import classnames from "classnames";
import Photon from "photoncss";

export type DrawerEntryProps = { to: string, icon: string, children: React.ReactNode, external?: boolean };

export function DrawerEntry({ to, icon, children, external }: DrawerEntryProps): JSX.Element {

	const [ active, setState ] = useState(false);
	const shouldBeActive = (): boolean => location.pathname.toLowerCase() === to.toLowerCase();

	useEffect(function() {
		Waves.init();
		const iv = setInterval(function() {
			const state = shouldBeActive();
			if (active !== state) setState(state);
		});
		return (): void => clearInterval(iv);
	});

	if (external === true) return (
		<a href={to}>
			<ListItem className={classnames(active && "active", "round")} icon={
				<TextIcon >{icon}</TextIcon>
			}>{children}</ListItem>
		</a>
	);

	return (
		<Link to={to} onClick={ () => Photon.Drawer("#drawer").close() }>
			<ListItem className={classnames(active && "active", "round")} icon={
				<TextIcon variant="outlined">{icon}</TextIcon>
			}>{children}</ListItem>
		</Link>
	);
}
