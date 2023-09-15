import React from "react";
import { render } from "@testing-library/react";

import Backdrop from ".";

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
