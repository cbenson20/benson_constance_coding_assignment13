import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TableCell } from "./TableCell";
import { TableCellProps } from "./TableCell.types";

export default {
  title: "Components/Table/TableCell",
  component: TableCell,
  argTypes: {
    disabled: { control: "boolean" },
    isHeader: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<TableCellProps> = (args) => (
  <table>
    <tbody>
      <tr>
        <TableCell {...args} />
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: "Table Cell Content",
  disabled: false,
  isHeader: false,
};

export const HeaderCell = Template.bind({});
HeaderCell.args = {
  children: "Header Cell",
  disabled: false,
  isHeader: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Cell",
  disabled: true,
  isHeader: false,
};
