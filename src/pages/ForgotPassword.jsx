import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Input from "../components/Input/Input";
import Navbar from "../components/Navbar/Navbar";

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({});
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  return (
    <div className="form-container">
      <h1 className="text-center">Forgot Password</h1>
      <p className="text-center label m-1">
        Don't worry! It happens. Enter you email linked to your account and
        we'll send a link on your email to reset your password.
      </p>
      <form action="">
        <Input
          labelName={"EMAIL"}
          name="email"
          type={"email"}
          changeHandler={changeHandler}
        />
        <button className="btn form-signup-btn">Send Reset Link</button>
      </form>
    </div>
  );
};

const ForgotPassword = () => {
  return (
    <div>
      <Navbar />
      <ForgotPasswordForm />
      <Footer />
    </div>
  );
};

export default ForgotPassword;
