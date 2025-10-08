import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { RadioButton } from "./RadioButton";
import { RadioButtonProps } from "./RadioButton.types";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Radio Option",
  disabled: false,
  checked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Radio",
  disabled: true,
};
