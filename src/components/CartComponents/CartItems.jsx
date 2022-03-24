import React from "react";
import ForzaImg from "../../assets/listing-images/forza-horizon.png";
import "./styles/CartItems.css";

const CartItemCard = () => {
  return (
    <div className="cart-item-card">
      <div className="cart-item-img-container">
        <img src={ForzaImg} className="cart-item-img" alt="" />
      </div>
      <div className="cart-item-content">
        <div className="cart-item-details">
          <p className="cart-item-name">Forza Horizon 5</p>
          <p className="cart-item-price">₹2,399.00</p>
        </div>
        <div className="cart-item-quantity-container">
          <p className="quantity-label">Quantity:</p>
          <div className="quantity-container">
            <button className="quantity-btn">-</button>
            <p className="quantity-value">1</p>
            <button className="quantity-btn">+</button>
          </div>
        </div>
        <div className="cart-item-actions">
          <button className="btn cart-remove-btn">REMOVE FROM CART</button>
          <button className="btn cart-wishlist-add-btn">ADD TO WISHLIST</button>

        </div>
      </div>
    </div>
  );
};
const CartItems = () => {
  return (
    <div className="cart-items-container">
      <p className="filter-heading">CART ITEMS</p>
      <div className="divider-sm"></div>
      <div className="cart-item-container">
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
      </div>
    </div>
  );
};

export default CartItems;
