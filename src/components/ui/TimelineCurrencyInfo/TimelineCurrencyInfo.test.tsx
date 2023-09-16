import React from "react";
import { render } from "@testing-library/react";

import TimelineCurrencyInfo from ".";

describe("TimelineCurrencyInfo Unit Testing", () => {
  const props = {
    id: "BTC",
    name: "Bitcoin",
    iconSrc: "/path/to/icon",
  };

  it("Renders the currency info with the correct props", () => {
    const { getByTestId } = render(<TimelineCurrencyInfo {...props} />);
    const currencyInfo = getByTestId("timeline-currency-info");

    expect(currencyInfo).toBeInTheDocument();

    const icon = currencyInfo.querySelector("img");
    expect(icon).toHaveAttribute("src", props.iconSrc);

    const details = currencyInfo.querySelector(
      ".TimelineCurrencyInfo__Details",
    );
    expect(details).toHaveTextContent(props.name);
    expect(details).toHaveTextContent(props.id);
  });
});
