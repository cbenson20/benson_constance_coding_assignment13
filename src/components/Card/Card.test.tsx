import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

describe("Card Component", () => {
  test("renders card and is visible", () => {
    render(<Card title="Test Card" content="Test Content" />);
    const card = screen.getByText("Test Card");
    expect(card).toBeVisible();
  });

  test("changes background color when disabled", () => {
    render(
      <Card title="Disabled Card" content="Disabled Content" disabled={true} />
    );
    const card = screen.getByText("Disabled Card").closest("div");
    expect(card).toHaveStyle("background-color: #f5f5f5");
  });
});
