import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Login } from "~/pages/login";

import "./index.css";

export function App() {
  return (
    <StrictMode>
      <div className="text-3xl">App</div>
      <Login />
    </StrictMode>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
