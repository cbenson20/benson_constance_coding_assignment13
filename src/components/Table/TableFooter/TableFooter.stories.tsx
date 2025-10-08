import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TableFooter } from "./TableFooter";
import { TableFooterProps } from "../Table.types";

export default {
  title: "Components/Table/TableFooter",
  component: TableFooter,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<TableFooterProps> = (args) => (
  <table>
    <TableFooter {...args} />
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <tr>
      <td>Footer Content</td>
    </tr>
  ),
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: (
    <tr>
      <td>Disabled Footer</td>
    </tr>
  ),
  disabled: true,
};
