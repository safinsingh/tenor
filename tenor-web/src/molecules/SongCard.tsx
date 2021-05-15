import { HoverableCover } from "../atoms/HoverableCover";

export interface SongCardProps {
	title: string;
	artist: string;
	cover: string;
	onClick?: () => void | PromiseLike<void>;
}

export const SongCard = ({ title, artist, cover, onClick }: SongCardProps) => (
	<div className="flex flex-row items-center gap-3 group">
		<HoverableCover cover={cover} onClick={onClick} />
		<div className="flex flex-col">
			<h1 className="text-gray-900 text-lg font-semibold">{title}</h1>
			<h2 className="text-gray-700 text-sm font-semibold">{artist}</h2>
		</div>
	</div>
);
