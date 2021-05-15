import { Story, Meta } from "@storybook/react";
import { HoverableCover, HoverableCoverProps } from "../atoms/HoverableCover";
import { song } from "./var";

export default {
	title: "Hoverable Cover Art",
	component: HoverableCover
} as Meta;

const Template: Story<HoverableCoverProps> = (args) => (
	<div className="group">
		<HoverableCover {...args} />
	</div>
);

export const Sample = Template.bind({});
Sample.args = {
	album: song.album
};
