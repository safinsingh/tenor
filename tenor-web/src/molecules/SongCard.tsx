import { HoverableCover } from "../atoms/HoverableCover";
import { ISong } from "../common/song";

export type SongCardProps = Omit<ISong, "length">;

export const SongCard = ({ title, artist, album, onClick }: SongCardProps) => (
	<div className="flex flex-row items-center gap-3">
		<div className="group">
			<HoverableCover album={album} onClick={onClick} />
		</div>
		<div className="flex flex-col font-semibold">
			<h1 className="text-gray-900 text-md">{title}</h1>
			<h2 className="text-sm text-gray-700">{artist}</h2>
		</div>
	</div>
);
