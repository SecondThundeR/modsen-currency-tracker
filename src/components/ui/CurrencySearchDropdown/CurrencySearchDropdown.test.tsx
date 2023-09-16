import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CurrencySearchDropdown from ".";

jest.mock("@/utils/filterCurrencyOptions", () => {
  return {
    filterCurrencyOptions: function MockFilterCurrencyOptions(value: string) {
      if (value === "BTC") {
        return [{ id: "BTC", name: "Bitcoin", iconSrc: "BTC.png" }];
      } else {
        return [];
      }
    },
  };
});

describe("CurrencySearchDropdown Unit Testing", () => {
  const setSelectedCurrency = jest.fn();

  it("Renders the filtered currency options", () => {
    const { getByText } = render(
      <CurrencySearchDropdown
        value="BTC"
        setSelectedCurrency={setSelectedCurrency}
      />,
    );
    const option = getByText("Bitcoin");

    expect(option).toBeInTheDocument();
  });

  it("Calls the setSelectedCurrency function when a currency option is clicked", () => {
    const { getByText } = render(
      <CurrencySearchDropdown
        value="BTC"
        setSelectedCurrency={setSelectedCurrency}
      />,
    );
    const option = getByText("Bitcoin");

    fireEvent.click(option);
    expect(setSelectedCurrency).toHaveBeenCalledWith({
      id: "BTC",
      name: "Bitcoin",
    });
  });

  it("Does not render when there are no filtered currency options", () => {
    const { queryByRole } = render(
      <CurrencySearchDropdown
        value="XYZ"
        setSelectedCurrency={setSelectedCurrency}
      />,
    );
    const dropdown = queryByRole("listbox");

    expect(dropdown).not.toBeInTheDocument();
  });
});
