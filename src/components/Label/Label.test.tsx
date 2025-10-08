import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label } from "./Label";

describe("Label Component", () => {
  test("renders label and is visible", () => {
    render(<Label text="Test Label" />);
    const label = screen.getByText("Test Label");
    expect(label).toBeVisible();
  });

  test("changes color when disabled", () => {
    render(<Label text="Disabled Label" disabled={true} />);
    const label = screen.getByText("Disabled Label");
    expect(label).toHaveStyle("color: #cccccc");
  });
});
