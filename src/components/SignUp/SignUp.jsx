import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import "./SignUp.css";
const SignUp = () => {
  const [formData, setFormData] = useState({});
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  return (
    <div className="form-container">
      <h1 className="text-center">Sign Up</h1>
      <form action="">
        <Input labelName={"NAME"} name="name" changeHandler={changeHandler} />
        <Input
          labelName={"EMAIL"}
          name="email"
          type={"email"}
          changeHandler={changeHandler}
        />
        <Input
          labelName={"PASSWORD"}
          name="password"
          type={"password"}
          changeHandler={changeHandler}
        />
        <Input
          labelName={"CONFIRM PASSWORD"}
          name="confirm-password"
          type={"password"}
          changeHandler={changeHandler}
        />
        <div className="checkbox-group">
          <input type="checkbox" />
          <label htmlFor="">
            I have read and agreed to all terms and conditions
          </label>
        </div>
        <button className="btn form-signup-btn">Sign Up</button>
      </form>
      <p className="text-center">
        Already have an account? Login{" "}
        <Link to="/login" className="format-link color-secondary">
          here
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
