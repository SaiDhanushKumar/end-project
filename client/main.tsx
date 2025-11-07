import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (container) {
  const g: any = window as any;
  if (!g.__REACT_APP_ROOT) {
    g.__REACT_APP_ROOT = createRoot(container);
  }
  g.__REACT_APP_ROOT.render(<App />);
}

// Hot Module Replacement: re-render app on updates without re-creating root
if (import.meta.hot) {
  import.meta.hot.accept();
}
