import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "./Dropdown";

describe("Dropdown Component", () => {
  test("renders dropdown and is visible", () => {
    render(<Dropdown options={["Option 1", "Option 2"]} />);
    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeVisible();
  });

  test("changes background color when disabled", () => {
    render(<Dropdown options={["Option 1", "Option 2"]} disabled={true} />);
    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toHaveStyle("background-color: #f5f5f5");
  });
});
