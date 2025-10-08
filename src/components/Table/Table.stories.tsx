import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Table, TableHeader, TableRow, TableCell, TableFooter } from "./";
import { TableProps } from "./Table.types";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<TableProps> = (args) => (
  <Table {...args}>
    <TableHeader disabled={args.disabled}>
      <TableRow disabled={args.disabled}>
        <TableCell isHeader disabled={args.disabled}>
          Header 1
        </TableCell>
        <TableCell isHeader disabled={args.disabled}>
          Header 2
        </TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow disabled={args.disabled}>
        <TableCell disabled={args.disabled}>Row 1 Cell 1</TableCell>
        <TableCell disabled={args.disabled}>Row 1 Cell 2</TableCell>
      </TableRow>
      <TableRow disabled={args.disabled}>
        <TableCell disabled={args.disabled}>Row 2 Cell 1</TableCell>
        <TableCell disabled={args.disabled}>Row 2 Cell 2</TableCell>
      </TableRow>
    </tbody>
    <TableFooter disabled={args.disabled}>
      <TableRow disabled={args.disabled}>
        <TableCell disabled={args.disabled}>Footer 1</TableCell>
        <TableCell disabled={args.disabled}>Footer 2</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
