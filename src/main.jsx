import "regenerator-runtime";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { MaterialUIControllerProvider } from "./context";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Auth0Provider
    domain={import.meta.env.VITE_DOMAIN}
    clientId={import.meta.env.VITE_CLIENTID}
    redirectUri={window.location.origin + import.meta.env.VITE_AUTH + "/"}
  >
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </Auth0Provider>
  // </React.StrictMode>
);
