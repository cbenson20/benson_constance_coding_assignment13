import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroImage } from "./HeroImage";

describe("HeroImage Component", () => {
  test("renders hero image and is visible", () => {
    render(
      <HeroImage
        src="https://via.placeholder.com/1200x400"
        alt="Test Hero"
        title="Test Title"
      />
    );
    const hero = screen.getByText("Test Title");
    expect(hero).toBeVisible();
  });

  test("changes opacity when disabled", () => {
    render(
      <HeroImage
        src="https://via.placeholder.com/1200x400"
        alt="Disabled Hero"
        title="Disabled Title"
        disabled={true}
      />
    );
    const heroImg = screen.getByAltText("Disabled Hero");
    const heroContainer = heroImg.closest("div");
    expect(heroContainer).toHaveStyle("opacity: 0.6");
  });
});
