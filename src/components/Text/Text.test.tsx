import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "./Text";

describe("Text Component", () => {
  test("renders text and is visible", () => {
    render(<Text content="Test Text" />);
    const text = screen.getByText("Test Text");
    expect(text).toBeVisible();
  });

  test("changes color when disabled", () => {
    render(<Text content="Disabled Text" disabled={true} />);
    const text = screen.getByText("Disabled Text");
    expect(text).toHaveStyle("color: #cccccc");
  });
});
