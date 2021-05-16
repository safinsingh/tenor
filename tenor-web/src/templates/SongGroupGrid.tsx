import { SongGroupCardProps, SongGroupCard } from "../molecules/SongGroupCard";

export type SongGroupGridProps = {
	groups: SongGroupCardProps[];
	pageTitle: "Albums" | "Playlists";
};

export const SongGroupGrid = ({ groups, pageTitle }: SongGroupGridProps) => (
	<div className="flex flex-col w-full gap-3 p-10 overflow-y-scroll">
		<h1 className="text-6xl font-extrabold text-gray-900">{pageTitle}</h1>
		<div className="grid gap-4 mt-4 auto-fit-cols-20">
			{groups.map((group) => (
				<SongGroupCard {...group} />
			))}
		</div>
	</div>
);
