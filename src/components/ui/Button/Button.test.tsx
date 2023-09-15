import React from "react";
import { describe, expect, it } from "@jest/globals";
import { cleanup, fireEvent, render } from "@testing-library/react";

import Button from ".";

describe("Button Unit Testing", () => {
  let consoleOutput: string[] = [];
  const mockedLog = (output: string) => consoleOutput.push(output);
  const originalLog = console.log;

  beforeEach(() => (console.log = mockedLog));

  afterEach(() => {
    console.log = originalLog;
    consoleOutput = [];
    cleanup();
  });

  it("Renders button", () => {
    const { queryByText } = render(<Button>Button text</Button>);
    expect(queryByText(/Button text/i)).toBeTruthy();
  });

  it("Fires onClick event", () => {
    const { queryByText } = render(
      <Button onClick={() => console.log("Clicked!")}>Button text</Button>,
    );
    const element = queryByText(/Button text/i);
    if (!element) throw new Error("Element not found");

    expect(element).toBeTruthy();
    fireEvent.click(element);
    expect(consoleOutput.at(-1)).toContain("Clicked!");
  });

  it("Doesn't fires onClick event when disabled", () => {
    const { queryByText } = render(
      <Button onClick={() => console.log("Clicked!")} disabled>
        Button text
      </Button>,
    );
    const element = queryByText(/Button text/i);
    if (!element) throw new Error("Element not found");

    expect(element).toBeTruthy();
    fireEvent.click(element);
    expect(consoleOutput.at(-1) ?? "No output").toContain("No output");
  });
});
