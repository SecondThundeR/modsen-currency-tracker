import React from "react";
import { render } from "@testing-library/react";

import PlaceholderHero from ".";

describe("PlaceholderHero Unit Testing", () => {
  it("Renders the hero with the correct text", () => {
    const text = "Hello, world!";
    const { getByTestId } = render(<PlaceholderHero text={text} />);
    const hero = getByTestId("placeholder-hero");

    expect(hero).toBeInTheDocument();
    expect(hero).toHaveTextContent(text);
  });
});
