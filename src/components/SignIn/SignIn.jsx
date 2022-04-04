import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import { useAlert } from "../../context/alertContext";
import Input from "../Input/Input";
import "./SignIn.css";
import Loader from "../Loader/Loader";
import { useAuth } from "../../context/authContext";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const isFormFullyFilled = email && password;
  const [isLoading, setIsLoading] = useState(false);
  const { alertSetter, alertHide } = useAlert();
  const { setAuth } = useAuth();
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post("/api/auth/login", JSON.stringify(formData));
      const data = await res.data;
      if (data.foundUser) {
        setAuth({
          isAuthenticated: true,
          token: data.encodedToken,
          user: data.foundUser,
        });
        alertSetter({
          alertAction: "ALERT-PRIMARY",
          alertMessage: "Successfully signed in!",
        });
        alertHide();
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...data.foundUser,
            createdAt: undefined,
            updatedAt: undefined,
            _id: undefined,
            password: undefined,
          })
        );
        setIsLoading(false);
        return navigate("/games/all");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form-container">
      <h1 className="text-center">Login</h1>
      <form action="">
        <Input
          labelName={"EMAIL"}
          name="email"
          type={"email"}
          value={email}
          changeHandler={changeHandler}
        />
        <Input
          labelName={"PASSWORD"}
          name="password"
          type={"password"}
          value={password}
          changeHandler={changeHandler}
        />
        <div className="flex items-center justify-between">
          <div className="checkbox-group">
            <input type="checkbox" name="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <Link to={"/forgot"} className="format-link color-secondary">
            Forgot Password
          </Link>
        </div>
        <button
          onClick={signInHandler}
          className={`btn form-signup-btn ${
            !isFormFullyFilled && "btn-disabled"
          }`}
        >
          {isLoading ? <Loader /> : "Login"}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFormData({ email: "test@gmail.com", password: "test123" });
          }}
          className={`btn form-signup-btn`}
        >
          Use Test Credentials
        </button>
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
