import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AlertProvider } from "./context/alertContext";
import { AuthProvider } from "./context/authContext";
import { ListingProvider } from "./context/listingContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AlertProvider>
        <ListingProvider>
          <App />
        </ListingProvider>
      </AlertProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
