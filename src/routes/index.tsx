import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "@/components/Home";
import InvalidPage from "@/components/InvalidPage";
import Root from "@/components/Root";
import { INVALID_ROUTE, ROOT_ROUTE } from "@/constants/routes";

export const router = createBrowserRouter([
  {
    path: ROOT_ROUTE,
    element: <Root />,
    children: [
      {
        path: ROOT_ROUTE,
        element: <Home />,
      },
      {
        path: INVALID_ROUTE,
        element: <InvalidPage />,
      },
    ],
  },
]);
