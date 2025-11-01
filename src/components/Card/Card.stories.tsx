import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Card } from "./Card";
import { CardProps } from "./Card.types";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
  content: "This is the card content with some sample text to demonstrate how it looks.",
  imageUrl: "https://via.placeholder.com/300x200",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Disabled Card",
  content: "This card is disabled and cannot be clicked.",
  imageUrl: "https://via.placeholder.com/300x200",
  disabled: true,
};
