/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import { render } from "@testing-library/react";

import Toast from ".";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: jest.fn((element) => element),
}));

describe("Toast Unit Testing", () => {
  let root: HTMLDivElement;

  beforeEach(() => {
    root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
  });

  afterEach(() => {
    document.body.removeChild(root);
  });

  it("Renders toast", () => {
    const { queryByText } = render(<Toast isOpen>Toast content</Toast>, {
      container: root,
    });
    expect(queryByText(/Toast content/i)).toBeTruthy();
  });
});
