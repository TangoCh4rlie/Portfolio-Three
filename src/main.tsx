import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TargetProvider from "./utils/TargetProvider.tsx";
import ModalProvider from "./utils/ModalProvider.tsx";

import { PostHogProvider } from "posthog-js/react";

const options = {
  api_host: import.meta.env.REACT_APP_PUBLIC_POSTHOG_HOST,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={options}
    >
      <TargetProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </TargetProvider>
    </PostHogProvider>
  </StrictMode>,
);
