import React from "react";
import CartAside from "../components/CartComponents/CartAside";
import CartItems from "../components/CartComponents/CartItems";
import CartMain from "../components/CartComponents/CartMain";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useAlert } from "../context/alertContext";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="container-lg">
        <div className="game-category-heading">
          <h1>MY CART</h1>
          <div className="divider-sm"></div>
        </div>
        <div className="cart-container-main">
          <div className="cart-container">
            <CartMain />
            <CartAside />
          </div>
          <div>
            <CartItems />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
