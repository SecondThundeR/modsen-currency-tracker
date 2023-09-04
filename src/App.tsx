import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

import "./App.css";

import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
