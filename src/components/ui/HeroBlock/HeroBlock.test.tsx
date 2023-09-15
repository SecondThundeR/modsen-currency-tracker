import React from "react";
import { describe, expect, it } from "@jest/globals";
import { cleanup, render } from "@testing-library/react";

import HeroBlock from ".";

describe("HeroBlock Unit Testing", () => {
  afterEach(cleanup);

  it("Renders HeroBlock", () => {
    const { queryByText } = render(<HeroBlock />);
    expect(queryByText(/Modsen Currency Tracker/i)).toBeTruthy();
    expect(
      queryByText(/Quotes for the dollar and other international currencies./i),
    ).toBeTruthy();
  });
});
