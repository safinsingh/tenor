import { Story, Meta } from "@storybook/react";
import { PlayerBar, PlayerBarProps } from "../organisms/PlayerBar";
import { playingSong } from "./var";

export default {
	title: "Player Bar",
	component: PlayerBar
} as Meta;

const Template: Story<PlayerBarProps> = (args) => <PlayerBar {...args} />;

export const Sample = Template.bind({});
Sample.args = { song: playingSong, controls: {} };
