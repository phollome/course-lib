import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");
if (root === null) {
  throw new Error("No root element found");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
