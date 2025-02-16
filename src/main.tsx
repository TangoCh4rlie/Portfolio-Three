import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TargetProvider from "./utils/TargetProvider.tsx";
import ModalProvider from "./utils/ModalProvider.tsx";

import { PostHogProvider } from "posthog-js/react";
import posthog from "posthog-js";

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <TargetProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </TargetProvider>
    </PostHogProvider>
  </StrictMode>,
);
