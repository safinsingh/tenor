import { ISong } from "../common/song";
import { HoverableCover } from "../atoms/HoverableCover";
import { timestampToString } from "../../lib";

export const SongDisplay: React.FC<ISong> = ({
	title,
	artist,
	album,
	length,
	onClick
}) => (
	<div className="flex flex-row items-center justify-between p-3 text-lg font-semibold duration-150 border-2 border-gray-200 rounded-md hover:shadow-md group">
		<div className="flex flex-row items-center gap-3">
			<HoverableCover album={album} height="h-10" onClick={onClick} />
			<h1 className="text-gray-900">{title}</h1>
			<h1 className="text-gray-600">{artist}</h1>
		</div>
		<h1 className="text-gray-400">{album.name}</h1>
		<h1 className="text-gray-400">{timestampToString(length)}</h1>
	</div>
);
