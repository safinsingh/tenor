import { Story, Meta } from "@storybook/react";
import { ProfileBox, ProfileBoxProps } from "../atoms/ProfileBox";
import { user } from "./var";

export default {
	title: "Profile Box",
	component: ProfileBox
} as Meta;

const Template: Story<ProfileBoxProps> = (args) => <ProfileBox {...args} />;

export const Sample = Template.bind({});
Sample.args = user;
