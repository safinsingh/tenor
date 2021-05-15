import { Story, Meta } from "@storybook/react";
import { SongCard, SongCardProps } from "../molecules/SongCard";
import { song as fullSong } from "./var";

export default {
	title: "Song Card",
	component: SongCard
} as Meta;

const Template: Story<SongCardProps> = (args) => <SongCard {...args} />;

export const Sample = Template.bind({});
const { length: _, ...song } = fullSong;
Sample.args = song;
