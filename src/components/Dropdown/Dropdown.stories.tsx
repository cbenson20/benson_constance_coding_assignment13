import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    disabled: { control: "boolean" },
    onSelect: { action: "selected" },
  },
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  disabled: true,
};
