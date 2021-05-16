export type SongGroupCardProps = {
	cover: string;
	name: string;
	description?: string;
	onClick?: () => void | PromiseLike<void>;
};

export const SongGroupCard = ({
	cover,
	name,
	description,
	onClick
}: SongGroupCardProps) => (
	<div
		className="flex flex-col duration-150 border border-gray-200 rounded-md cursor-pointer w-60 hover:shadow"
		onClick={onClick}
	>
		<img src={cover} className="flex-grow object-cover h-40 rounded-t-md" />
		<div className="p-4 font-semibold">
			<h1 className="text-lg text-gray-800">{name}</h1>
			{description && (
				<h2 className="text-sm text-gray-500">{description}</h2>
			)}
		</div>
	</div>
);
