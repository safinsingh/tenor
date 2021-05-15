import { Story, Meta } from "@storybook/react";
import { Nav, NavProps } from "../organisms/Nav";
import { user, pages } from "./var";

export default {
	title: "Navbar",
	component: Nav
} as Meta;

const Template: Story<NavProps> = (args) => (
	<div className="h-screen">
		<Nav {...args} />
	</div>
);

export const Sample = Template.bind({});
Sample.args = { user, pages, active: "Songs" };
