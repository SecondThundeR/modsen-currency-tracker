import React from "react";
import { RouterProvider } from "react-router-dom";

import ErrorBoundary from "@/components/ErrorBoundary";
import useTheme from "@/hooks/useTheme";

import { router } from "./routes";

function App() {
  useTheme();

  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
