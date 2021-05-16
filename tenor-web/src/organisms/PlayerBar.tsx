import { SongCard } from "../molecules/SongCard";
import { ISong } from "../common/song";
import { PlayerControls, PlayerControlsProps } from "../atoms/PlayerControls";
import { PlayerProgress, PlayerProgressProps } from "../atoms/PlayerProgress";
import { ClassValue } from "clsx";
import clsx from "clsx";

export type PlayerBarProps = {
	controls: PlayerControlsProps;
	song: ISong & PlayerProgressProps;
	className?: ClassValue;
};

export const PlayerBar = ({ controls, song, className }: PlayerBarProps) => {
	const { head, length, ...cardProps } = song;
	return (
		<div
			className={clsx(
				"flex flex-row items-center w-full gap-12 p-4 bg-gray-100 player-shadow",
				className
			)}
		>
			<SongCard {...cardProps} onClick={controls.onTogglePlay} />
			<PlayerControls {...controls} />
			<PlayerProgress head={head} length={length} />
		</div>
	);
};
