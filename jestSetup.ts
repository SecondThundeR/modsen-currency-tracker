import "@testing-library/jest-dom";

import { ReactElement } from "react";

jest.mock<unknown>("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: jest.fn((element: ReactElement) => element),
}));
