import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "../../context/alertContext";
import { useAuth } from "../../context/authContext";
import Input from "../Input/Input";
import Loader from "../Loader/Loader";
import "./SignUp.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    hasUserAgreed: false,
  });
  const { name, phoneNumber, email, password, confirmPassword, hasUserAgreed } =
    formData;
  const isFormFullyFilled =
    name && phoneNumber && email && password && confirmPassword && hasUserAgreed;
  const [isLoading, setIsLoading] = useState(false);
  const { alertSetter, alertHide } = useAlert();
  const { setAuth } = useAuth();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post(
        "/api/auth/signup",
        JSON.stringify(formData)
      );
      const data = await res.data;
      if (data.createdUser) {
        setAuth({ isAuthenticated: true, token: data.encodedToken });
        alertSetter({
          alertAction: "ALERT-PRIMARY",
          alertMessage: "Successfully signed up!",
        });
        alertHide();
        localStorage.setItem("token", res.data.encodedToken);
        setIsLoading(false);
        return navigate("/games/all");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form-container">
      <h1 className="text-center">Sign Up</h1>
      <form action="">
        <Input
          labelName={"NAME"}
          name="name"
          placeholder={"Enter Name"}
          changeHandler={changeHandler}
        />
        <Input
          labelName={"PHONE NUMBER"}
          name="phoneNumber"
          placeholder={"Enter Phone Number"}
          changeHandler={changeHandler}
        />
        <Input
          labelName={"EMAIL"}
          name="email"
          type={"email"}
          placeholder={"Enter Email"}
          changeHandler={changeHandler}
        />
        <Input
          labelName={"PASSWORD"}
          name="password"
          type={"password"}
          placeholder={"Enter Password"}
          changeHandler={changeHandler}
        />
        <Input
          labelName={"CONFIRM PASSWORD"}
          name="confirmPassword"
          type={"password"}
          placeholder={"Confirm Password"}
          changeHandler={changeHandler}
        />
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="hasUserAgreed"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.checked })
            }
          />
          <label htmlFor="">
            I have read and agreed to all terms and conditions
          </label>
        </div>
        <button
          className={`btn form-signup-btn ${
            !isFormFullyFilled && "btn-disabled"
          }`}
          onClick={signUpHandler}
        >
          {isLoading ? <Loader /> : "Sign Up"}
        </button>
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
