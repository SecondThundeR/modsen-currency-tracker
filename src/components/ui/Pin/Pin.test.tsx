import React from "react";
import { render } from "@testing-library/react";

import Pin from ".";

describe("Pin Unit Testing", () => {
  it("Renders the pin without default size", () => {
    const { getByTestId } = render(<Pin />);
    const pin = getByTestId("pin");

    expect(pin).toBeInTheDocument();
    expect(pin).toHaveAttribute("height", "20");
    expect(pin).toHaveAttribute("viewBox", "0 0 24 24");
    expect(pin).toHaveStyle("fill: #d00");
  });

  it("Renders the pin with the custom size", () => {
    const size = 50;
    const { getByTestId } = render(<Pin size={size} />);
    const pin = getByTestId("pin");

    expect(pin).toBeInTheDocument();
    expect(pin).toHaveAttribute("height", `${size}`);
    expect(pin).toHaveAttribute("viewBox", "0 0 24 24");
    expect(pin).toHaveStyle("fill: #d00");
  });
});
