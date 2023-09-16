import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Button from ".";

describe("Button Unit Testing", () => {
  it("Renders the children", () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const button = getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
  });

  it("Calls the onClick function when clicked", () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>Click me</Button>);
    const button = getByRole("button", { name: /click me/i });

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("Renders the button with the correct type", () => {
    const { getByTestId } = render(<Button type="submit">Submit</Button>);
    const button = getByTestId("submit");

    expect(button).toHaveAttribute("type", "submit");
  });

  it("Renders the button with the correct class name", () => {
    const { getByRole } = render(
      <Button className="custom-class">Click me</Button>,
    );
    const button = getByRole("button", { name: /click me/i });

    expect(button).toHaveClass("custom-class");
  });

  it("Renders the button as disabled", () => {
    const { getByRole } = render(<Button disabled>Click me</Button>);
    const button = getByRole("button", { name: /click me/i });

    expect(button).toBeDisabled();
  });
});
