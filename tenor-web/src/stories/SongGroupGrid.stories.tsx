import { Story, Meta } from "@storybook/react";
import { SongGroupGrid, SongGroupGridProps } from "../templates/SongGroupGrid";
import { PageWrapper } from "../templates/PageWrapper";
import { playlist, mockPageWrapper, album } from "./var";

export default {
	title: "Pages/Albums & Playlists Page",
	component: SongGroupGrid
} as Meta;

const Template: Story<SongGroupGridProps> = (args) => (
	<PageWrapper {...mockPageWrapper}>
		<SongGroupGrid {...args} />
	</PageWrapper>
);

export const Playlists = Template.bind({});
Playlists.args = { groups: Array(10).fill(playlist), pageTitle: "Playlists" };

export const Albums = Template.bind({});
Albums.args = { groups: Array(10).fill(album), pageTitle: "Albums" };
