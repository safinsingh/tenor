import clsx, { ClassValue } from "clsx";

export type ProfileBoxProps = {
	name: string;
	profilePicture: string;
	marginBottom?: ClassValue;
};

export const ProfileBox = ({
	name,
	profilePicture,
	marginBottom
}: ProfileBoxProps) => (
	<div
		className={clsx(
			"flex flex-row items-center justify-center gap-4",
			marginBottom
		)}
	>
		<img
			src={profilePicture}
			className="object-cover w-8 h-8 rounded-full"
		/>
		<h1 className="text-2xl font-extrabold text-gray-900">{name}</h1>
	</div>
);
