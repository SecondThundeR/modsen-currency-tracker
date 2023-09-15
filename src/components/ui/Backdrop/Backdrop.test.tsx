/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import Backdrop from ".";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: jest.fn((element) => element),
}));

describe("Backdrop Unit Testing", () => {
  let root: HTMLDivElement;

  beforeEach(() => {
    root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
  });

  afterEach(() => {
    document.body.removeChild(root);
  });

  it("Renders backdrop", () => {
    const { queryByText } = render(
      <Backdrop closeModal={() => {}}>
        <div>Modal content</div>
      </Backdrop>,
      { container: root },
    );
    expect(queryByText(/Modal content/i)).toBeTruthy();
  });
});
