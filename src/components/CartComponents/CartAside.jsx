import React from "react";
import "./styles/CartAside.css";

const CartAside = () => {
  return (
    <aside className="cart-aside">
      <p className="filter-heading">ORDER SUMMARY</p>
      <div className="divider-sm"></div>
      <div className="order-detail-container">
        <div className="order-detail">
          <p className="order-detail-name">Sub-Total(2 - items)</p>
          <p className="order-detail-price">₹1025</p>
        </div>
        <div className="order-detail">
          <p className="order-detail-name">Discount</p>
          <p className="order-detail-price">-₹100</p>
        </div>
        <div className="order-detail">
          <p className="order-detail-name">Delivery Charges</p>
          <p className="order-detail-price">₹40</p>
        </div>
      </div>
      <div className="divider-sm"></div>
      <div className="order-total-container">
        <p className="order-total">Total Amount:</p>
        <p className="order-total-amount">₹965</p>
      </div>
      <div className="divider-sm"></div>
      <button className="btn place-order-btn">PLACE ORDER</button>
    </aside>
  );
};

export default CartAside;
