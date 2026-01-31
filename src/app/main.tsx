import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./providers/styles/index.css";
import { Provider } from "react-redux";

import { Router } from "./providers/routes/Router.tsx";
import { store } from "./providers/store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>,
);
