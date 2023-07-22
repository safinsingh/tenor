import { Song } from "../../lib/xstate";
import { timestampToString } from "../../lib";
import clsx from "clsx";
import { SongCard } from "./SongCard";

export type SongDisplayProps = Song & {
	onClick?: () => void | PromiseLike<void>;
};

export const SongDisplay: React.FC<SongDisplayProps> = ({
	title,
	artist,
	album,
	length,
	onClick
}) => (
	<div
		className={clsx(
			"flex flex-row items-center justify-between p-3 font-semibold duration-150",
			"border border-gray-200 rounded-md",
			"cursor-pointer group",
			"hover:shadow"
		)}
		onClick={onClick}
	>
		<SongCard
			title={title}
			artist={artist}
			album={album}
			coverHeight="h-8"
			titleHeight="text-sm"
			artistHeight="text-xs"
			buttonHeight="1rem"
		/>
		<h1 className="hidden text-sm text-gray-400 lg:inline">{album.name}</h1>
		<h1 className="text-sm text-gray-400">{timestampToString(length)}</h1>
	</div>
);
