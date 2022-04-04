import React from "react";
import CartAside from "../components/CartComponents/CartAside";
import CartItems from "../components/CartComponents/CartItems";
import CartMain from "../components/CartComponents/CartMain";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useUserInfo } from "../context/userInfoContext";

const Cart = () => {
  const { userInfoState } = useUserInfo();
  const { cartItems } = userInfoState;
  return (
    <div>
      <Navbar />
      {cartItems.length > 0 && (
        <main>
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
        </main>
      )}
      {cartItems.length === 0 && (
        <div className="container-lg">
          <div className="game-category-heading">
            <h1 className="text-center">Your Cart Is Empty</h1>
            <div className="divider-sm"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
