import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { HeroImage } from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    disabled: { control: "boolean" },
    height: { control: "text" },
  },
} as Meta;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/1200x400",
  alt: "Hero Image",
  title: "Welcome to Our Site",
  subtitle: "Discover amazing features",
  disabled: false,
  height: "400px",
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: "https://via.placeholder.com/1200x400",
  alt: "Disabled Hero",
  title: "Disabled Hero",
  subtitle: "This hero is disabled",
  disabled: true,
};
