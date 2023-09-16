import React from "react";
import { render } from "@testing-library/react";

import Alert from ".";

describe("Alert Unit Testing", () => {
  it("Renders a success alert", () => {
    const { getByTestId } = render(
      <Alert type="success">Success message</Alert>,
    );
    const alert = getByTestId("alert-success");

    expect(alert).toHaveClass("Alert__Success");
  });

  it("Renders an error alert", () => {
    const { getByTestId } = render(<Alert type="error">Error message</Alert>);
    const alert = getByTestId("alert-error");

    expect(alert).toHaveClass("Alert__Error");
  });

  it("Renders the children", () => {
    const { getByTestId } = render(
      <Alert type="success">Success message</Alert>,
    );
    const alert = getByTestId("alert-success");

    expect(alert).toHaveTextContent("Success message");
  });
});
