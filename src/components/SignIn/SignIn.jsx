import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import "./SignIn.css";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  return (
    <div className="form-container">
      <h1 className="text-center">Login</h1>
      <form action="">
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
        <div className="flex items-center justify-between">
          <div className="checkbox-group">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <Link to={"/forgot"} className="format-link color-secondary">
            Forgot Password
          </Link>
        </div>
        <button className="btn form-signup-btn">Login</button>
      </form>
      <p className="text-center">
        Don't have an account? Sign up!{" "}
        <Link to="/signup" className="format-link color-secondary">
          here
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
