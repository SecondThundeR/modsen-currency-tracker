import React from "react";
import { describe, expect, it } from "@jest/globals";
import { cleanup, render } from "@testing-library/react";

import Alert from ".";

describe("Alert Unit Testing", () => {
  afterEach(cleanup);

  it("Alert renders error variant", () => {
    const { queryByText } = render(<Alert type="error">Error alert</Alert>);
    expect(queryByText(/Error alert/i)).toBeTruthy();
  });

  it("Alert renders error variant", () => {
    const { queryByText } = render(<Alert type="success">Success alert</Alert>);
    expect(queryByText(/Success alert/i)).toBeTruthy();
  });
});
