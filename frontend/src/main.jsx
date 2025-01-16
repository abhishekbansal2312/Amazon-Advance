import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { Provider } from "react-redux";
import store from "./store/store";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SidebarProvider>
  </StrictMode>
);
