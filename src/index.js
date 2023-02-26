import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// index.js is the bridge between the components and the web browser
// <StrictMode> is a built-in component that is a tool to catch any potential issues and improve code quality