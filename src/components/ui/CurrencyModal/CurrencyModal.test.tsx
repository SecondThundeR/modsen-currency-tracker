import React from "react";
import { createEvent, fireEvent, render } from "@testing-library/react";

import useConversionRate from "@/hooks/useConversionRate";

import CurrencyModal from ".";

jest.mock("@/hooks/useConversionRate");

const mockUseConversionRate = useConversionRate as jest.MockedFunction<
  typeof useConversionRate
>;

describe("CurrencyModal Unit Testing", () => {
  const closeModal = jest.fn();
  const stopPropagation = jest.fn();

  it("Should update value for select and input", () => {
    mockUseConversionRate.mockReturnValue({
      conversionInfo: {
        asset_id_base: "BTC",
        rates: [
          {
            time: "2021-09-18T00:00:00.0000000Z",
            asset_id_quote: "USD",
            rate: 50000,
          },
        ],
      },
      conversionOptions: ["USD"],
      isLoading: false,
      isError: false,
    });

    const { container, getByTestId } = render(
      <CurrencyModal selectedId="BTC" closeModal={closeModal} />,
    );

    expect(getByTestId("select")).toBeInTheDocument();
    fireEvent.change(getByTestId("select"), {
      target: { value: "USD" },
    });

    expect(getByTestId("input")).toBeInTheDocument();
    fireEvent.change(getByTestId("input"), {
      target: { value: "10" },
    });

    const element = container.querySelector(".CurrencyModal__CurrencyResult");
    if (!element) throw new Error("Element not found");

    const h1 = element.querySelector("h1");
    if (!h1) throw new Error("h1 not found");

    const text = h1.textContent;
    expect(text).toEqual("10 Bitcoin is 500000.000000 USD");
  });

  it("Should display is loading", () => {
    mockUseConversionRate.mockReturnValue({
      conversionInfo: {
        asset_id_base: "",
        rates: [],
      },
      conversionOptions: [],
      isLoading: true,
      isError: false,
    });

    const { getByText } = render(
      <CurrencyModal selectedId="BTC" closeModal={closeModal} />,
    );

    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("Should display is error", () => {
    mockUseConversionRate.mockReturnValue({
      conversionInfo: {
        asset_id_base: "",
        rates: [],
      },
      conversionOptions: [],
      isLoading: false,
      isError: true,
    });

    const { getByText } = render(
      <CurrencyModal selectedId="BTC" closeModal={closeModal} />,
    );

    expect(
      getByText("There is an error while trying to get rate. We are sorry..."),
    ).toBeInTheDocument();
  });

  it("Calls the closeModal function when the backdrop is clicked", () => {
    mockUseConversionRate.mockReturnValue({
      conversionInfo: {
        asset_id_base: "BTC",
        rates: [],
      },
      conversionOptions: ["USD"],
      isLoading: false,
      isError: false,
    });

    const { getByTestId } = render(
      <CurrencyModal selectedId="BTC" closeModal={closeModal} />,
    );
    const backdrop = getByTestId("backdrop");

    fireEvent.click(backdrop);
    expect(closeModal).toHaveBeenCalled();
  });

  it("Stops event propagation when clicked", () => {
    mockUseConversionRate.mockReturnValue({
      conversionInfo: {
        asset_id_base: "BTC",
        rates: [],
      },
      conversionOptions: ["USD"],
      isLoading: false,
      isError: false,
    });

    const { getByTestId } = render(
      <CurrencyModal selectedId="BTC" closeModal={closeModal} />,
    );
    const modal = getByTestId("currency-modal");
    const event = createEvent.click(modal);
    event.stopPropagation = stopPropagation;

    fireEvent(modal, event);
    expect(stopPropagation).toHaveBeenCalled();
  });

  it("Does not render anything when selectedId is null or currencyData is undefined", () => {
    mockUseConversionRate.mockReturnValue({
      conversionInfo: {
        asset_id_base: "BTC",
        rates: [],
      },
      conversionOptions: ["USD"],
      isLoading: false,
      isError: false,
    });

    const { container } = render(
      <CurrencyModal selectedId={null} closeModal={jest.fn} />,
    );
    expect(container.firstChild).toBeNull();
  });
});
