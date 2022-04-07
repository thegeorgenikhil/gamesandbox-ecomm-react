import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useUserInfo } from "../../context/userInfoContext";
import "./Navbar.css";

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const { userInfoDispatch, userInfoState } = useUserInfo();
  const { cartItems, wishlistItems } = userInfoState;
  const { isAuthenticated } = auth;
  const navigate = useNavigate();

  const signOutHandler = () => {
    setAuth({ isAuthenticated: false, token: "", user: "" });
    userInfoDispatch({ type: "CLEAR_USER_DETAILS" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return navigate("/");
  };
  return (
    <div className="navbar">
      <div className="nav-left-container">
        <Link to={"/"} className="format-link nav-brand">
          🕹️GameSandbox.
        </Link>
        <Link to={"/games/all"} className="format-link browse-btn">
          Discover
        </Link>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <div className="nav-item-link nav-search-container">
            <AiOutlineSearch className="nav-icon" />
            <input
              type="text"
              placeholder="Search"
              className="nav-search-input"
            />
          </div>
        </li>
        <li className="nav-item">
          <div className="icon-badge-container">
            <Link className="nav-item-link" to="/cart">
              <AiOutlineShoppingCart className="nav-icon" />
            </Link>
            {cartItems.length > 0 && (
              <div className="icon-badge">{cartItems.length}</div>
            )}
          </div>
        </li>
        <li className="nav-item">
          <div className="icon-badge-container">
            <Link className="nav-item-link" to="/wishlist">
              <AiOutlineHeart className="nav-icon" />
            </Link>
            {wishlistItems.length > 0 && (
              <div className="icon-badge">{wishlistItems.length}</div>
            )}
          </div>
        </li>
        {isAuthenticated ? (
          <li className="nav-item nav-signout-btn" onClick={signOutHandler}>
            <p className="nav-item-link">SIGN-OUT</p>
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
