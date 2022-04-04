export const alertReducer = (state, action) => {
  switch (action.alertAction) {
    case "ALERT-SUCCESS":
      return {
        ...state,
        showAlert: true,
        alertMessage: action.alertMessage,
        alertScheme: "alert-success",
      };
    case "ALERT-DANGER":
      return {
        ...state,
        showAlert: true,
        alertMessage: action.alertMessage,
        alertScheme: "alert-danger",
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
