import React from "react";
import { render } from "@testing-library/react";

import Footer from ".";

describe("Footer Unit Testing", () => {
  it("Renders the company name", () => {
    const { getByText } = render(<Footer />);
    const name = getByText("Modsen Currency Tracker");

    expect(name).toBeInTheDocument();
  });

  it("Renders the company description", () => {
    const { getByText } = render(<Footer />);
    const description = getByText(
      "Since then, the company has grown organically to. Starsup is the world's largest trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.",
    );

    expect(description).toBeInTheDocument();
  });
});
