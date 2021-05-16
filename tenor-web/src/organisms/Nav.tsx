import clsx from "clsx";
import { ClassValue } from "clsx";
import {
	NavigatorButton,
	NavigatorButtonProps
} from "../atoms/NavigatorButton";
import { ProfileBox, ProfileBoxProps } from "../atoms/ProfileBox";

export type NavProps = {
	user: ProfileBoxProps;
	pages: NavigatorButtonProps[];
	active: string;
	className?: ClassValue;
};

export const Nav = ({ user, pages, active, className }: NavProps) => (
	<div className={clsx("flex justify-center w-80 nav-gradient", className)}>
		<div className="flex flex-col items-start gap-5 my-10">
			<ProfileBox {...user} marginBottom="mb-6" />
			{pages.map((page) => (
				<NavigatorButton {...page} active={page.name === active} />
			))}
		</div>
	</div>
);
