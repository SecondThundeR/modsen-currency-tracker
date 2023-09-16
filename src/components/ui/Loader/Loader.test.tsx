import React from "react";
import { render } from "@testing-library/react";

import Loader from ".";

describe("Loader Unit Testing", () => {
  it('Renders the Loader component with "Loading..." text', () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId("loader");
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveTextContent("Loading...");
  });
});
