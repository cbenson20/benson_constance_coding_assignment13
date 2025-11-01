import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableCell } from "./TableCell";

describe("TableCell Component", () => {
  test("renders table cell and is visible", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Test Cell</TableCell>
          </tr>
        </tbody>
      </table>,
    );
    const cell = screen.getByText("Test Cell");
    expect(cell).toBeVisible();
  });

  test("changes color when disabled", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled={true}>Disabled Cell</TableCell>
          </tr>
        </tbody>
      </table>,
    );
    const cell = screen.getByText("Disabled Cell");
    expect(cell).toHaveStyle("color: #cccccc");
  });
});
