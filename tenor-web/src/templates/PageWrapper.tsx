import { Nav, NavProps } from "../organisms/Nav";
import { PlayerBar, PlayerBarProps } from "../organisms/PlayerBar";

export type GlobalParams = { nav: NavProps; player: PlayerBarProps };

export const PageWrapper: React.FC<GlobalParams> = ({
	children,
	nav,
	player
}) => (
	<div
		className="grid h-screen"
		style={{
			gridTemplateColumns: "auto 1fr",
			gridTemplateRows: "1fr auto"
		}}
	>
		<Nav {...nav} />
		{children}
		<PlayerBar {...player} className="col-span-2" />
	</div>
);
