import { React, createContext, useContext, useReducer } from "react";
import Alert from "../components/Alert/Alert";

const AlertContext = createContext();

const alertReducer = (state, action) => {
  switch (action.alertAction) {
    case "ALERT-SUCCESS":
      return {
        ...state,
        showAlert: true,
        alertMessage: action.alertMessage,
        alertScheme: "alert-success",
      };
    case "ALERT-PRIMARY":
      return {
        ...state,
        showAlert: true,
        alertMessage: action.alertMessage,
        alertScheme: "",
      };
    case "ALERT-HIDE":
      return { ...state, showAlert: false, alertMessage: "", alertScheme: "" };
  }
};

export const AlertProvider = ({ children }) => {
  const [alertState, alertSetter] = useReducer(alertReducer, {
    showAlert: false,
    alertMessage: "",
    alertScheme: "",
  });

  const { showAlert } = alertState;

  const alertHide = () => {
    setTimeout(() => {
      alertSetter({ alertAction: "ALERT-HIDE" });
    }, 4000);
  };

  return (
    <AlertContext.Provider value={{ alertState, alertSetter, alertHide }}>
      {showAlert && (
        <Alert
          alertStatus={showAlert}
          alertMessage={alertState.alertMessage}
          color={alertState.alertScheme}
        />
      )}
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
