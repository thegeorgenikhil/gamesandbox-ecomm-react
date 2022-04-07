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
      <AlertProvider>
        <UserInfoProvider>
          <ListingProvider>
            <App />
          </ListingProvider>
        </UserInfoProvider>
      </AlertProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
