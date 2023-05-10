import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./Redux/Store";

export const StoreContext = createContext();
const root = createRoot(document.getElementById("root"));


root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
