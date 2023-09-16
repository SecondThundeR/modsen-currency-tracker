import React from "react";
import { render } from "@testing-library/react";

import HeroBlock from ".";

describe("HeroBlock Unit Testing", () => {
  it("Renders the company name, description and correct icon", () => {
    const { getByText, getByRole } = render(<HeroBlock />);
    const companyName = getByText("Modsen Currency Tracker");
    const companyDescription = getByText(
      "Quotes for the dollar and other international currencies.",
    );
    const image = getByRole("img");

    expect(companyName).toBeInTheDocument();
    expect(companyDescription).toBeInTheDocument();
    expect(image).toHaveAttribute("width", "184");
    expect(image).toHaveAttribute("height", "184");
  });
});
