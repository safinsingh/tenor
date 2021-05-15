import { Story, Meta } from "@storybook/react";
import { PlayerProgress, PlayerProgressProps } from "../atoms/PlayerProgress";
import { playingSong } from "./var";

export default {
	title: "Player Progress",
	component: PlayerProgress
} as Meta;

const Template: Story<PlayerProgressProps> = (args) => (
	<PlayerProgress {...args} />
);

export const Sample = Template.bind({});
Sample.args = { head: playingSong.head, length: playingSong.length };
