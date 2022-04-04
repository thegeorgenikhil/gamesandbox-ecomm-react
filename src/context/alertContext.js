import { React, createContext, useContext, useReducer } from "react";
import Alert from "../components/Alert/Alert";
import { alertReducer } from "../reducers/alertReducer";

const AlertContext = createContext();

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
