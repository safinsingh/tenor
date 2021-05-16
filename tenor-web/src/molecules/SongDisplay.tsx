import { ISong } from "../common/song";
import { HoverableCover } from "../atoms/HoverableCover";
import { timestampToString } from "../../lib";
import clsx from "clsx";

export const SongDisplay: React.FC<ISong> = ({
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
		<div className="flex flex-row items-center gap-3 text-lg">
			<HoverableCover album={album} height="h-8" buttonHeight="1rem" />
			<h1 className="text-gray-900">{title}</h1>
			<h1 className="text-gray-600">{artist}</h1>
		</div>
		<h1 className="text-gray-400 text-md">{album.name}</h1>
		<h1 className="text-gray-400 text-md">{timestampToString(length)}</h1>
	</div>
);
