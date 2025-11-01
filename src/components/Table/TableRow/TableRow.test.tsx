import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableRow } from "./TableRow";

describe("TableRow Component", () => {
  test("renders table row and is visible", () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Test Row Cell</td>
          </TableRow>
        </tbody>
      </table>,
    );
    const row = screen.getByText("Test Row Cell");
    expect(row).toBeVisible();
  });

  test("changes background color when disabled", () => {
    render(
      <table>
        <tbody>
          <TableRow disabled={true}>
            <td>Disabled Row Cell</td>
          </TableRow>
        </tbody>
      </table>,
    );
    const row = screen.getByText("Disabled Row Cell").closest("tr");
    expect(row).toHaveStyle("background-color: #f9f9f9");
  });
});
