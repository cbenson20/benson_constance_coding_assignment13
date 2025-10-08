import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TableHeader } from "./TableHeader";
import { TableHeaderProps } from "../Table.types";

export default {
  title: "Components/Table/TableHeader",
  component: TableHeader,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<TableHeaderProps> = (args) => (
  <table>
    <TableHeader {...args} />
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <tr>
      <th>Header Content</th>
    </tr>
  ),
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: (
    <tr>
      <th>Disabled Header</th>
    </tr>
  ),
  disabled: true,
};
