import { Story, Meta } from "@storybook/react";
import {
	NavigatorButton,
	NavigatorButtonProps
} from "../atoms/NavigatorButton";
import { pages } from "./var";

export default {
	title: "Navigator Button",
	component: NavigatorButton
} as Meta;

const Template: Story<NavigatorButtonProps> = (args) => (
	<NavigatorButton {...args} />
);

export const Sample = Template.bind({});
Sample.args = pages[0];
