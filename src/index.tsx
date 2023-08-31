import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const root = document.getElementById("root");
if (!root) throw Error("Can't find root div in HTML");

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
