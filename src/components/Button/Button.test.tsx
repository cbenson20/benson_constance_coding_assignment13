import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button Component", () => {
  test("renders button and is visible", () => {
    render(<Button text="Test Button" />);
    const button = screen.getByText("Test Button");
    expect(button).toBeVisible();
  });

  test("changes background color when disabled", () => {
    render(<Button text="Disabled Button" disabled={true} />);
    const button = screen.getByText("Disabled Button");
    expect(button).toHaveStyle("background-color: #cccccc");
  });
});
