import { Story, Meta } from "@storybook/react";
import { SongCard, SongCardProps } from "../molecules/SongCard";

export default {
	title: "Song Card",
	component: SongCard
} as Meta;

const Template: Story<SongCardProps> = (args) => <SongCard {...args} />;

export const FivePercentTint = Template.bind({});
FivePercentTint.args = {
	title: "5% Tint",
	artist: "Travis Scott",
	cover: "https://i.pinimg.com/originals/15/4b/3a/154b3a679c547316bb33ebe49b1ec517.jpg"
};
