import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TargetProvider from "./utils/TargetProvider.tsx";
import ModalProvider from "./utils/ModalProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TargetProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </TargetProvider>
  </StrictMode>,
);
