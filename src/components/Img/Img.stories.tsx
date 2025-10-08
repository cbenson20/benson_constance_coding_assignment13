import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Img } from "./Img";
import { ImgProps } from "./Img.types";

export default {
  title: "Components/Img",
  component: Img,
  argTypes: {
    disabled: { control: "boolean" },
    width: { control: "text" },
    height: { control: "text" },
  },
} as Meta;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/300x200",
  alt: "Placeholder Image",
  disabled: false,
  width: "300px",
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: "https://via.placeholder.com/300x200",
  alt: "Disabled Image",
  disabled: true,
};
