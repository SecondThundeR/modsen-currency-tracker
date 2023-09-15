import React from "react";
import { render } from "@testing-library/react";

import Loader from ".";

describe("Loader Unit Testing", () => {
  it("should render the loader component", () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it('should render the "Loading..." text', () => {
    const { getByText } = render(<Loader />);
    const loadingText = getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });
});
