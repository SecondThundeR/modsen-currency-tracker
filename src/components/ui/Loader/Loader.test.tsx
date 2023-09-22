import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Loader from ".";

("redux-mock-store");

const mockStore = configureStore([]);

describe("Loader Unit Testing", () => {
  const store = mockStore({
    theme: {
      currentTheme: "light",
    },
  });

  it('Renders the Loader component with "Loading..." text', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Loader />
      </Provider>,
    );
    const loader = getByTestId("loader");
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveTextContent("Loading...");
  });
});
