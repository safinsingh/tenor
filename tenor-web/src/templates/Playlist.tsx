import { Song } from "../../lib/xstate";
import { SongDisplay } from "../molecules/SongDisplay";

export type PlaylistProps = {
	title: string;
	description: string;
	songs: Song[];
};

export const Playlist = ({ title, description, songs }: PlaylistProps) => (
	<div className="flex flex-col w-full gap-3 p-10 overflow-y-scroll">
		<h1 className="text-6xl font-extrabold text-gray-900">{title}</h1>
		<h2 className="text-2xl font-semibold text-gray-500">{description}</h2>
		<div className="flex flex-col w-full gap-4 mt-4">
			{songs.map((song) => (
				<SongDisplay {...song} />
			))}
		</div>
	</div>
);
