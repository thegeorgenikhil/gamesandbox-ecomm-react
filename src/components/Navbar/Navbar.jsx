import React from "react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-brand">GameSandbox.</div>
      <ul className="nav-items">
        <li className="nav-item">
          <Link className="nav-item-link" to="/cart">
            <AiOutlineShoppingCart />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-item-link" to="/wishlist">
            <AiOutlineHeart />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
