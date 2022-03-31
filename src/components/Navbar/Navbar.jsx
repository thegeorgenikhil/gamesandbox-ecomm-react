import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "./Navbar.css";

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const { isAuthenticated } = auth;
  const navigate = useNavigate();

  const signOutHandler = () => {
    setAuth({ isAuthenticated: false, token: "" });
    localStorage.removeItem("token");
    return navigate("/");
  };
  return (
    <div className="navbar">
      <div className="nav-left-container">
        <Link to={"/"} className="format-link nav-brand">
          GameSandbox.
        </Link>
        <Link to={"/games/all"} className="format-link browse-btn">
          Discover
        </Link>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <div className="nav-item-link nav-search-container">
            <AiOutlineSearch fontSize={"1.4rem"} />
            <input
              type="text"
              placeholder="Search"
              className="nav-search-input"
            />
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-item-link" to="/cart">
            <AiOutlineShoppingCart fontSize={"1.4rem"} />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-item-link" to="/wishlist">
            <AiOutlineHeart fontSize={"1.4rem"} />
          </Link>
        </li>
        {isAuthenticated ? (
          <li className="nav-item nav-signout-btn" onClick={signOutHandler}>
            <p className="nav-item-link">
              SIGN-OUT
            </p>
          </li>
        ) : (
          <Link to={"/signup"} className="format-link">
            <li className="nav-item nav-signin-btn">
              <p className="nav-item-link" to="/signup">
                SIGN-UP
              </p>
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
