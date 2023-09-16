import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CurrencyGrid from ".";

describe("CurrencyGrid Unit Testing", () => {
  const sectionTitle = "Test section";
  const sectionInfo = [
    { id: "BTC", name: "Bitcoin", details: "100$", iconSrc: "/icons/btc.svg" },
    { id: "ETH", name: "Ethereum", details: "50$", iconSrc: "/icons/eth.svg" },
  ];
  const onSectionClick = jest.fn();

  it("Renders the section title", () => {
    const { getByText } = render(
      <CurrencyGrid sectionTitle={sectionTitle} sectionInfo={sectionInfo} />,
    );
    const title = getByText("Test section");
    expect(title).toBeInTheDocument();
  });

  it("Renders the currency buttons", () => {
    const { getByRole } = render(
      <CurrencyGrid sectionTitle={sectionTitle} sectionInfo={sectionInfo} />,
    );
    const bitcoinButton = getByRole("button", { name: /bitcoin/i });
    const ethereumButton = getByRole("button", { name: /ethereum/i });

    expect(bitcoinButton).toBeInTheDocument();
    expect(ethereumButton).toBeInTheDocument();
  });

  it("Calls the onSectionClick function when a currency button is clicked", () => {
    const { getByRole } = render(
      <CurrencyGrid
        sectionTitle={sectionTitle}
        sectionInfo={sectionInfo}
        onSectionClick={onSectionClick}
      />,
    );
    const bitcoinButton = getByRole("button", { name: /bitcoin/i });

    fireEvent.click(bitcoinButton);
    expect(onSectionClick).toHaveBeenCalled();
  });
});
