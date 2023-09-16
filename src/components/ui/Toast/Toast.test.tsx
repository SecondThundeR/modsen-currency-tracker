import React from "react";
import { render } from "@testing-library/react";

import Toast from ".";

describe("Toast Unit Testing", () => {
  const props = {
    isOpen: true,
    children: "Toast message",
  };

  it("Renders the toast with the correct props", () => {
    const { getByTestId } = render(<Toast {...props} />);
    const toast = getByTestId("toast");

    expect(toast).toBeInTheDocument();
    expect(toast).toHaveTextContent(props.children);
    expect(toast).toHaveClass("Toast");
    expect(toast).toHaveClass("Toast--visible");
  });

  it("Does render the toast with opacity 0 when isOpen is false", () => {
    const { queryByTestId } = render(
      <Toast isOpen={false}>{props.children}</Toast>,
    );
    const toast = queryByTestId("toast");

    expect(toast).toBeInTheDocument();
    expect(toast).toHaveTextContent(props.children);
    expect(toast).toHaveClass("Toast");
    expect(toast).not.toHaveClass("Toast--visible");
  });
});
