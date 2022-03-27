import React from "react";
import "./Alert.css";

const Alert = ({ alertMessage, color }) => {
  return (
    <div className={`alert ${color || ""}`}>
      <div className="alert-content">{alertMessage}</div>
    </div>
  );
};

export default Alert;
