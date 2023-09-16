import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Hamburger from ".";

describe("Hamburger Unit Testing", () => {
  const toggleOpen = jest.fn();

  it("Should call the toggleOpen function when clicked", () => {
    const { getByTestId } = render(
      <Hamburger isOpen toggleOpen={toggleOpen} />,
    );
    const hamburger = getByTestId("hamburger");

    fireEvent.click(hamburger);
    expect(toggleOpen).toHaveBeenCalled();
  });

  it('Should have the "Hamburger__Burger--first" class when isOpen is true', () => {
    const { getByTestId } = render(
      <Hamburger toggleOpen={() => {}} isOpen={true} />,
    );
    const firstBurger = getByTestId("hamburger-first-burger");

    expect(firstBurger.classList.contains("Hamburger__Burger--first")).toBe(
      true,
    );
  });

  it('Should have the "Hamburger__Burger--second" class when isOpen is true', () => {
    const { getByTestId } = render(
      <Hamburger toggleOpen={() => {}} isOpen={true} />,
    );
    const secondBurger = getByTestId("hamburger-second-burger");

    expect(secondBurger.classList.contains("Hamburger__Burger--second")).toBe(
      true,
    );
  });
});
