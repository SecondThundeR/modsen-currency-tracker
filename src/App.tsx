import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import ErrorBoundary from "@/components/ErrorBoundary";

import { router } from "./routes";

import "./App.css";

import { persistor, store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}

export default App;
