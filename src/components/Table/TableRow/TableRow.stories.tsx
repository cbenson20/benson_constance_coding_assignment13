import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TableRow } from "./TableRow";
import { TableFooter } from "../TableFooter";
import { TableRowProps } from "../Table.types";

export default {
  title: "Components/Table/TableRow",
  component: TableRow,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<TableRowProps> = (args) => (
  <table>
    <tbody>
      <TableRow {...args} />
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <td>Row Cell 1</td>
      <td>Row Cell 2</td>
    </>
  ),
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: (
    <>
      <td>Disabled Row Cell 1</td>
      <td>Disabled Row Cell 2</td>
    </>
  ),
  disabled: true,
};
