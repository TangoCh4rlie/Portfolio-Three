import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TargetProvider from "./utils/TargetProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TargetProvider>
      <App />
    </TargetProvider>
  </StrictMode>,
);
