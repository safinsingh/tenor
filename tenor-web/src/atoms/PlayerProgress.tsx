import { timestampToString } from "../../lib";

export type PlayerProgressProps = {
	head: number;
	length: number;
};

export const PlayerProgress = ({ head, length }: PlayerProgressProps) => (
	<div className="flex items-center flex-grow gap-3 text-sm font-semibold text-gray-700">
		<h1>{timestampToString(head)}</h1>
		<div className="w-full h-1 bg-gray-200 rounded-full">
			<div
				className="h-full bg-blue-500 rounded-full"
				style={{ width: `${Math.floor((head / length) * 100)}%` }}
			></div>
		</div>
		<h1>-{timestampToString(length - head)}</h1>
	</div>
);
