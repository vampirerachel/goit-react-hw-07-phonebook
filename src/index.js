import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store} from "./redux/store";
import App from "./components/App";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);
