import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";

import { Pages } from "~/pages";

import { withProviders } from "~/app/providers";

import "./index.css";

const updateSW = registerSW();
export function App() {
  return (
    <StrictMode>
      <Pages />
    </StrictMode>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  withProviders(App)
);
