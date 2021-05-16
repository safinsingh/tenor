import clsx, { ClassValue } from "clsx";
import { HoverableCover } from "../atoms/HoverableCover";
import { ISong } from "../common/song";

export type SongCardProps = Omit<ISong, "length"> & {
	onClick?: () => void | PromiseLike<void>;
	coverHeight?: ClassValue;
	titleHeight?: ClassValue;
	artistHeight?: ClassValue;
	buttonHeight?: string;
};

export const SongCard = ({
	title,
	artist,
	album,
	coverHeight,
	onClick,
	titleHeight = "text-md",
	artistHeight = "text-sm",
	buttonHeight
}: SongCardProps) => (
	<div className="flex flex-row items-center justify-center gap-3">
		<div
			className="flex items-center justify-center group"
			onClick={onClick}
		>
			<HoverableCover
				album={album}
				height={coverHeight}
				buttonHeight={buttonHeight}
			/>
		</div>
		<div className="flex flex-col font-semibold">
			<h1 className={clsx("text-gray-900", titleHeight)}>{title}</h1>
			<h2 className={clsx("text-gray-700", artistHeight)}>{artist}</h2>
		</div>
	</div>
);
