import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// global CSS: lade Deine gebündelte CSS (erstelle dist/styles.min.css via Build-Tool)
import "../public/assets/vendor/boxicons/css/boxicons.css";
// optional: weitere zentrale css imports (z.B. app.css)
// import "./assets/css/style.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
