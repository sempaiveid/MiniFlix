import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@app/styles/global.css";
import { App } from "@app";
const a = 1;
console.log(a);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
