import { Story, Meta } from "@storybook/react";
import { PlayerControls, PlayerControlsProps } from "../atoms/PlayerControls";

export default {
	title: "Player Controls",
	component: PlayerControls
} as Meta;

const Template: Story<PlayerControlsProps> = (args) => (
	<PlayerControls {...args} />
);

export const Sample = Template.bind({});
