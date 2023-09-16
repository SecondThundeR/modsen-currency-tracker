import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import InvalidPage from ".";

describe("InvalidPage Unit Testing", () => {
  it("Renders the page with the correct content", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <InvalidPage />
      </MemoryRouter>,
    );
    const page = getByTestId("invalid-page");

    expect(page).toBeInTheDocument();
    expect(page).toHaveClass("InvalidPage");

    const heading = page.querySelector("h1");
    expect(heading).toHaveTextContent("It looks like this page doesn't exist");

    const link = page.querySelector("a");
    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveTextContent("Go to home page");
  });
});
