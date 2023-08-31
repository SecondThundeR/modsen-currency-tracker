import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import Counter from "./index";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("Counter changes the count after click", () => {
  const { queryByText, getByText } = render(<Counter />);

  expect(queryByText(/Count: 0/i)).toBeTruthy();

  fireEvent.click(getByText(/Increment/i));

  expect(queryByText(/Count: 1/i)).toBeTruthy();
});
