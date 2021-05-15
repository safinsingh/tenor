import { Story, Meta } from "@storybook/react";
import { SongDisplay } from "../molecules/SongDisplay";
import { ISong } from "../common/song";
import { song } from "./var";

export default {
	title: "Song Display",
	component: SongDisplay
} as Meta;

const Template: Story<ISong> = (args) => <SongDisplay {...args} />;

export const Sample = Template.bind({});
Sample.args = song;
