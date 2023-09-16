import React from "react";
import { render } from "@testing-library/react";

import CurrencyButtonInfo from ".";

describe("CurrencyButtonInfo Unit Testing", () => {
  const currencyInfo = {
    name: "Bitcoin",
    details: "A decentralized digital currency",
    rate: 50000,
    rate_base: "USD",
  };

  const currencyInfoWithoutDetails = {
    name: "Bitcoin",
    rate: 50000,
    rate_base: "USD",
  };

  it("Renders the currency name", () => {
    const { getByText } = render(<CurrencyButtonInfo {...currencyInfo} />);
    const name = getByText("Bitcoin");

    expect(name).toBeInTheDocument();
  });

  it("Renders the currency details", () => {
    const { getByText } = render(<CurrencyButtonInfo {...currencyInfo} />);
    const details = getByText("A decentralized digital currency");

    expect(details).toBeInTheDocument();
  });

  it("Renders the currency rate", () => {
    const { getByText } = render(
      <CurrencyButtonInfo {...currencyInfoWithoutDetails} />,
    );
    const rate = getByText("50000.000000 USD");

    expect(rate).toBeInTheDocument();
  });

  it("Renders a message when no details or rate are provided", () => {
    const { getByText } = render(
      <CurrencyButtonInfo name={currencyInfo.name} />,
    );
    const message = getByText("No conversion details found");

    expect(message).toBeInTheDocument();
  });
});
