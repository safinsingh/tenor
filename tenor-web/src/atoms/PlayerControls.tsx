import { Play, SkipBack, SkipForward } from "react-feather";

export type PlayerControlsProps = {
	onSkipBack?: () => void | PromiseLike<void>;
	onTogglePlay?: () => void | PromiseLike<void>;
	onSkipForward?: () => void | PromiseLike<void>;
};

export const PlayerControls = ({
	onSkipBack,
	onTogglePlay,
	onSkipForward
}: PlayerControlsProps) => {
	const iconClasses =
		"stroke-current hover:text-gray-800 cursor-pointer duration-150";
	return (
		<div className="flex flex-row gap-3 text-gray-500">
			<SkipBack
				className={iconClasses}
				onClick={onSkipBack}
				size="1.125rem"
			/>
			<Play
				className={iconClasses}
				onClick={onTogglePlay}
				size="1.125rem"
			/>
			<SkipForward
				className={iconClasses}
				onClick={onSkipForward}
				size="1.125rem"
			/>
		</div>
	);
};
