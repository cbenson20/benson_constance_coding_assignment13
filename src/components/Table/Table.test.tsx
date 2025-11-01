import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table, TableHeader, TableRow, TableCell, TableFooter } from "./";

describe("Table Components", () => {
  test("renders table and is visible", () => {
    render(
      <Table>
        <tbody>
          <TableRow>
            <TableCell>Test Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>,
    );
    const table = screen.getByText("Test Cell");
    expect(table).toBeVisible();
  });

  test("table changes opacity when disabled", () => {
    render(
      <Table disabled={true}>
        <tbody>
          <TableRow>
            <TableCell>Test Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>,
    );
    const table = screen.getByRole("table");
    expect(table).toHaveStyle("opacity: 0.6");
  });
});
