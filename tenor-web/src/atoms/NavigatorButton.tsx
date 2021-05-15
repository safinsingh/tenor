import clsx from "clsx";
import { Icon } from "react-feather";

export type NavigatorButtonProps = {
	icon: Icon;
	name: string;
	active: boolean;
	onClick?: () => void | PromiseLike<void>;
};

export const NavigatorButton = ({
	icon: TabIcon,
	name,
	onClick,
	active
}: NavigatorButtonProps) => (
	<div
		className={clsx(
			"flex flex-row items-center justify-center gap-4 duration-150 cursor-pointer hover:text-gray-800",
			active ? "text-gray-800" : "text-gray-400"
		)}
		onClick={onClick}
	>
		<TabIcon className="stroke-current" size="1rem" />
		<h1 className="font-semibold text-md">{name}</h1>
	</div>
);
