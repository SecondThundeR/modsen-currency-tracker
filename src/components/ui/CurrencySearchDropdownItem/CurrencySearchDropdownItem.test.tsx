import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CurrencySearchDropdownItem from ".";

describe("CurrencySearchDropdownItem Unit Testing", () => {
  const setSelectedCurrency = jest.fn();
  const currency = { id: "BTC", name: "Bitcoin", iconSrc: "BTC.png" };

  it("Renders the currency name", () => {
    const { getByText } = render(
      <CurrencySearchDropdownItem
        {...currency}
        setSelectedCurrency={setSelectedCurrency}
      />,
    );
    const id = getByText("BTC");
    const name = getByText("Bitcoin");

    expect(id).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it("Calls the setSelectedCurrency function when clicked", () => {
    const { getByTestId } = render(
      <CurrencySearchDropdownItem
        {...currency}
        setSelectedCurrency={setSelectedCurrency}
      />,
    );
    const item = getByTestId("dropdown-item");

    fireEvent.click(item);
    expect(setSelectedCurrency).toHaveBeenCalledWith("Bitcoin");
  });
});
