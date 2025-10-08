import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RadioButton } from "./RadioButton";

describe("RadioButton Component", () => {
  test("renders radio button and is visible", () => {
    render(<RadioButton label="Test Radio" />);
    const radio = screen.getByText("Test Radio");
    expect(radio).toBeVisible();
  });

  test("changes border color when disabled", () => {
    render(<RadioButton label="Disabled Radio" disabled={true} />);
    const radioContainer = screen.getByText("Disabled Radio").parentElement;
    const radioCircle = radioContainer?.querySelector("span");
    expect(radioCircle).toHaveStyle("border-color: #cccccc");
  });
});
