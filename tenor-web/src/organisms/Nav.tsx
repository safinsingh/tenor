import {
	NavigatorButton,
	NavigatorButtonProps
} from "../atoms/NavigatorButton";
import { ProfileBox, ProfileBoxProps } from "../atoms/ProfileBox";

export type NavProps = {
	user: ProfileBoxProps;
	pages: NavigatorButtonProps[];
	active: string;
};

export const Nav = ({ user, pages, active }: NavProps) => (
	<div className="flex justify-center h-full w-80 bg-gradient-to-r from-gray-100 to-gray-200">
		<div className="flex flex-col items-start gap-5 my-10">
			<ProfileBox {...user} marginBottom="mb-6" />
			{pages.map((page) => (
				<NavigatorButton {...page} active={page.name === active} />
			))}
		</div>
	</div>
);
