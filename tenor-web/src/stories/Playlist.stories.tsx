import { Story, Meta } from "@storybook/react";
import { PageWrapper } from "../templates/PageWrapper";
import { Playlist, PlaylistProps } from "../templates/Playlist";
import { mockPageWrapper, song } from "./var";

export default {
	title: "Pages/Playlist Page",
	component: Playlist
} as Meta;

const Template: Story<PlaylistProps> = (args) => (
	<PageWrapper {...mockPageWrapper}>
		<Playlist {...args} />
	</PageWrapper>
);

export const Sample = Template.bind({});
Sample.args = {
	title: "Cool Stuff",
	description:
		"This is a playlist description! It has some interesting stuff.",
	songs: Array(10).fill(song)
};
