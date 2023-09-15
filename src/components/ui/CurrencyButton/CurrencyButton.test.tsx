import React from "react";
import { describe, expect, it } from "@jest/globals";
import { cleanup, fireEvent, render } from "@testing-library/react";

import CurrencyButton from ".";

describe("CurrencyButton Unit Testing", () => {
  let consoleOutput: string[] = [];
  const mockedLog = (output: string) => consoleOutput.push(output);
  const originalLog = console.log;

  beforeEach(() => (console.log = mockedLog));

  afterEach(() => {
    console.log = originalLog;
    consoleOutput = [];
    cleanup();
  });

  it("Renders button with details", () => {
    const { queryByText } = render(
      <CurrencyButton id="USD" name="Dollar" iconSrc="" details="$123" />,
    );
    expect(queryByText(/Dollar/i)).toBeTruthy();
    expect(queryByText(/\$123/i)).toBeTruthy();
  });

  it("Renders button with rate", () => {
    const { queryByText } = render(
      <CurrencyButton
        id="USD"
        name="Dollar"
        iconSrc=""
        rate={123.123123123}
        rate_base="$"
      />,
    );
    expect(queryByText(/Dollar/i)).toBeTruthy();
    expect(queryByText(/123.123123 \$/i)).toBeTruthy();
  });

  it("Renders button with no details and rate", () => {
    const { queryByText } = render(
      <CurrencyButton id="USD" name="Dollar" iconSrc="" />,
    );
    expect(queryByText(/Dollar/i)).toBeTruthy();
    expect(queryByText(/No conversion details found/i)).toBeTruthy();
  });

  it("Fires onClick event", () => {
    const { queryByText } = render(
      <CurrencyButton
        id="USD"
        name="Dollar"
        iconSrc=""
        details="$123"
        onClick={() => console.log("Clicked!")}
      />,
    );
    const element = queryByText(/Dollar/i);
    if (!element) throw new Error("Element not found");

    expect(element).toBeTruthy();
    expect(queryByText(/\$123/i)).toBeTruthy();
    fireEvent.click(element);
    expect(consoleOutput.at(-1)).toContain("Clicked!");
  });
});
