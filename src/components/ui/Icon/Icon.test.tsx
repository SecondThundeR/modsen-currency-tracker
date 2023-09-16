import React from "react";
import { render } from "@testing-library/react";

import Icon from ".";

describe("Icon Unit Testing", () => {
  it("Renders an image with the correct width, height, and src", () => {
    const props = {
      width: 100,
      height: 100,
      iconSrc: "https://example.com/icon.png",
    };
    const { getByRole } = render(<Icon {...props} />);
    const image = getByRole("img");

    expect(image).toHaveAttribute("width", "100");
    expect(image).toHaveAttribute("height", "100");
    expect(image).toHaveAttribute("src", "https://example.com/icon.png");
  });
});
