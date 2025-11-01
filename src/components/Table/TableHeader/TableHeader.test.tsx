import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableHeader } from "./TableHeader";

describe("TableHeader Component", () => {
  test("renders table header and is visible", () => {
    render(
      <table>
        <TableHeader>
          <tr>
            <th>Test Header</th>
          </tr>
        </TableHeader>
      </table>,
    );
    const header = screen.getByText("Test Header");
    expect(header).toBeVisible();
  });

  test("changes background color when disabled", () => {
    render(
      <table>
        <TableHeader disabled={true}>
          <tr>
            <th>Disabled Header</th>
          </tr>
        </TableHeader>
      </table>,
    );
    const header = screen.getByText("Disabled Header").closest("thead");
    expect(header).toHaveStyle("background-color: #f5f5f5");
  });
});
