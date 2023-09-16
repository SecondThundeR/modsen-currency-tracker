import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NavMenu from ".";

describe("NavMenu Unit Testing", () => {
  const menu = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/contact", name: "Contact" },
  ];

  it("Renders the navigation menu with the correct links", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <NavMenu menu={menu} navClass="nav" linkClass="link" />
      </MemoryRouter>,
    );
    const nav = getByTestId("nav-menu");

    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass("nav");

    const links = nav.querySelectorAll(".link");
    expect(links).toHaveLength(menu.length);
    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", menu[index].to);
      expect(link).toHaveTextContent(menu[index].name);
    });
  });
});
