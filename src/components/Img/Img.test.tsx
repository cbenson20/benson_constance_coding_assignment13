import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Img } from "./Img";

describe("Img Component", () => {
  test("renders image and is visible", () => {
    render(<Img src="https://via.placeholder.com/300x200" alt="Test Image" />);
    const image = screen.getByAltText("Test Image");
    expect(image).toBeVisible();
  });

  test("changes opacity when disabled", () => {
    render(<Img src="https://via.placeholder.com/300x200" alt="Disabled Image" disabled={true} />);
    const image = screen.getByAltText("Disabled Image");
    expect(image).toHaveStyle("opacity: 0.6");
  });
});
