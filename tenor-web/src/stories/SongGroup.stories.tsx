import { Story, Meta } from "@storybook/react";
import { SongGroupCard, SongGroupCardProps } from "../molecules/SongGroupCard";
import { playlist } from "./var";

export default {
	title: "Playlist Card",
	component: SongGroupCard
} as Meta;

const Template: Story<SongGroupCardProps> = (args) => (
	<SongGroupCard {...args} />
);

export const Sample = Template.bind({});
Sample.args = playlist;
