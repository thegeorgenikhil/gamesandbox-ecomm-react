import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AlertProvider } from "./context/alertContext";
import { AuthProvider } from "./context/authContext";
import { ListingProvider } from "./context/listingContext";
import { UserInfoProvider } from "./context/userInfoContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserInfoProvider>
        <AlertProvider>
          <ListingProvider>
            <App />
          </ListingProvider>
        </AlertProvider>
      </UserInfoProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
