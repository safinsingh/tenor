import { Story, Meta } from "@storybook/react";
import { HoverableCover, HoverableCoverProps } from "../atoms/HoverableCover";

export default {
	title: "Hoverable Cover Art",
	component: HoverableCover
} as Meta;

const Template: Story<HoverableCoverProps> = (args) => (
	<div className="group">
		<HoverableCover {...args} />
	</div>
);

export const FivePercentTint = Template.bind({});
FivePercentTint.args = {
	cover: "https://i.pinimg.com/originals/15/4b/3a/154b3a679c547316bb33ebe49b1ec517.jpg"
};
