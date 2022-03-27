import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const PrivateRoute = ({children}) => {
  const { auth } = useAuth();
  const { isAuthenticated } = auth;
  {
   return isAuthenticated ? children :  (<Navigate to={"/login"} />);
  }
};

export default PrivateRoute;
