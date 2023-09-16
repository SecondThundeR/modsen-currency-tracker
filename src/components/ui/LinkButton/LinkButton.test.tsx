import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import LinkButton from ".";

describe("LinkButton Unit Testing", () => {
  const to = "/path";

  it("Renders the link with the correct props", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LinkButton to={to}>Link Text</LinkButton>
      </MemoryRouter>,
    );
    const link = getByTestId("link-btn");

    expect(link).toHaveAttribute("href", to);
    expect(link).toHaveTextContent("Link Text");
  });
});
