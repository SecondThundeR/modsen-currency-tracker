import React from "react";
import { createBrowserRouter } from "react-router-dom";

import BankMap from "@/components/BankMap";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Root from "@/components/Root";
import Timeline from "@/components/Timeline";
import InvalidPage from "@/components/ui/InvalidPage";
import {
  BANK_MAP_ROUTE,
  CONTACT_ROUTE,
  INVALID_ROUTE,
  ROOT_ROUTE,
  TIMELINE_ROUTE,
} from "@/constants/routes";

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
        path: TIMELINE_ROUTE,
        element: <Timeline />,
      },
      {
        path: BANK_MAP_ROUTE,
        element: <BankMap />,
      },
      {
        path: CONTACT_ROUTE,
        element: <Contact />,
      },
      {
        path: INVALID_ROUTE,
        element: <InvalidPage />,
      },
    ],
  },
]);
