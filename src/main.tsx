import "@/styles/style.scss";
import App from "./App.tsx";
import { AppProvider } from "@shopify/polaris";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import enTranslations from "@shopify/polaris/locales/en.json";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  </StrictMode>
);
