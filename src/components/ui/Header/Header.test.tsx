import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Header from ".";

describe("Header Unit Testing", () => {
  const props = {
    onThemeChange: jest.fn(),
  };

  it("Renders the header with the correct props", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header {...props} />
      </MemoryRouter>,
    );
    const header = getByTestId("header");

    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("Header");
  });

  it("Calls onThemeChange when the theme button is clicked", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Header {...props} />
      </MemoryRouter>,
    );
    const button = getByRole("button");

    button.click();
    expect(props.onThemeChange).toHaveBeenCalled();
  });
});
