import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AlertProvider } from "./context/alertContext";
import { AuthProvider } from "./context/authContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
