import React from "react";
import { render } from "@testing-library/react";

import LastUpdated from ".";

describe("LastUpdated Unit Testing", () => {
  it("Renders the last updated time", () => {
    const props = {
      updateTime: "16:00 PM",
    };
    const { getByText } = render(<LastUpdated {...props} />);
    const text = getByText("Last updated at 16:00 PM");

    expect(text).toBeInTheDocument();
  });
});
