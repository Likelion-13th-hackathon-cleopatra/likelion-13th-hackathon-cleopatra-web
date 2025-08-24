import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css"; // Tailwind 엔트리
import { getAnonymousId } from "./utils/anonymousId";

// Initialize Anonymous ID on app startup
getAnonymousId();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
