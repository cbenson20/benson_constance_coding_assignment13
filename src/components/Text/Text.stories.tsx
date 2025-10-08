import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Text } from "./Text";
import { TextProps } from "./Text.types";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    disabled: { control: "boolean" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "This is sample text",
  disabled: false,
  size: "medium",
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: "This is disabled text",
  disabled: true,
};
