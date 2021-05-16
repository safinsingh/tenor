import { Story, Meta } from "@storybook/react";
import { SongDisplay, SongDisplayProps } from "../molecules/SongDisplay";
import { song } from "./var";

export default {
	title: "Song Display",
	component: SongDisplay
} as Meta;

const Template: Story<SongDisplayProps> = (args) => <SongDisplay {...args} />;

export const Sample = Template.bind({});
Sample.args = song;
