import React from "react";
import { render } from "@testing-library/react";

import SectionHeader from ".";

describe("SectionHeader Unit Testing", () => {
  it("Renders the header with the correct title", () => {
    const title = "Section Title";
    const { getByTestId } = render(<SectionHeader title={title} />);
    const header = getByTestId("section-header");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(title);
  });
});
