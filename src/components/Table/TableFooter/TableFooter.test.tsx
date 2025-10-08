import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableFooter } from "./TableFooter";

describe("TableFooter Component", () => {
  test("renders table footer and is visible", () => {
    render(
      <table>
        <TableFooter>
          <tr>
            <td>Test Footer</td>
          </tr>
        </TableFooter>
      </table>
    );
    const footer = screen.getByText("Test Footer");
    expect(footer).toBeVisible();
  });

  test("changes background color when disabled", () => {
    render(
      <table>
        <TableFooter disabled={true}>
          <tr>
            <td>Disabled Footer</td>
          </tr>
        </TableFooter>
      </table>
    );
    const footer = screen.getByText("Disabled Footer").closest("tfoot");
    expect(footer).toHaveStyle("background-color: #f5f5f5");
  });
});
