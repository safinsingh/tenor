import { SongCard } from "../molecules/SongCard";
import { ISong } from "../common/song";
import { PlayerControls, PlayerControlsProps } from "../atoms/PlayerControls";
import { PlayerProgress, PlayerProgressProps } from "../atoms/PlayerProgress";

export type PlayerBarProps = {
	controls: PlayerControlsProps;
	song: ISong & PlayerProgressProps;
};

export const PlayerBar = ({ controls, song }: PlayerBarProps) => {
	const { head, length, ...cardProps } = song;
	return (
		<div className="flex flex-row items-center w-full gap-12 bg-gray-50 player-shadow">
			<SongCard {...cardProps} onClick={controls.onTogglePlay} />
			<PlayerControls {...controls} />
			<PlayerProgress head={head} length={length} />
		</div>
	);
};
