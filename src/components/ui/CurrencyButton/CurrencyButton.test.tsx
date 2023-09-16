import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CurrencyButton from ".";

describe("CurrencyButton Unit Testing", () => {
  const currencyInfo = {
    id: "BTC",
    name: "Bitcoin",
    iconSrc: "/icons/btc.svg",
  };

  it("Renders the currency icon and info", () => {
    const { getByRole, getByText } = render(
      <CurrencyButton {...currencyInfo} />,
    );
    const icon = getByRole("img");
    const name = getByText("Bitcoin");
    const noDetails = getByText("No conversion details found");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("width", "64");
    expect(icon).toHaveAttribute("height", "64");
    expect(icon).toHaveAttribute("src", "/icons/btc.svg");
    expect(name).toBeInTheDocument();
    expect(noDetails).toBeInTheDocument();
  });

  it("Calls the onClick function when clicked", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <CurrencyButton {...currencyInfo} onClick={onClick} />,
    );
    const button = getByRole("button");

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("Renders the button with the correct class name", () => {
    const { getByRole } = render(<CurrencyButton {...currencyInfo} />);
    const button = getByRole("button");

    expect(button).toHaveClass("CurrencyButton");
  });
});
