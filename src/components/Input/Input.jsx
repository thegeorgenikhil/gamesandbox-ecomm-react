import React from "react";
import "./Input.css";

const Input = ({
  labelName,
  name,
  type,
  changeHandler,
  placeholder,
  value,
}) => {
  return (
    <div className="input-group">
      <label htmlFor="" className="label">
        {labelName}
      </label>
      <input
        type={type || "text"}
        name={name}
        className="input"
        value={value}
        onChange={changeHandler}
        placeholder={placeholder || ""}
      />
    </div>
  );
};

export default Input;
