import React from "react";
import { useUserInfo } from "../../context/userInfoContext";
import { cartTotal } from "../../services/CartServices/cartTotal";
import "./styles/CartAside.css";

const CartAside = () => {
  const { userInfoState } = useUserInfo();
  const { cartItems } = userInfoState;
  const totalCartValue = cartTotal(cartItems);
  const discountedValue = parseInt(totalCartValue / 10);
  const finalAmount = totalCartValue - discountedValue - 40;

  return (
    <aside className="cart-aside">
      <p className="filter-heading">ORDER SUMMARY</p>
      <div className="divider-sm"></div>
      <div className="order-detail-container">
        <div className="order-detail">
          <p className="order-detail-name">
            Sub-Total({cartItems.length} - items)
          </p>
          <p className="order-detail-price">₹{totalCartValue}</p>
        </div>
        <div className="order-detail">
          <p className="order-detail-name">Discount</p>
          <p className="order-detail-price">-₹{discountedValue}</p>
        </div>
        <div className="order-detail">
          <p className="order-detail-name">Delivery Charges</p>
          <p className="order-detail-price">₹40</p>
        </div>
      </div>
      <div className="divider-sm"></div>
      <div className="order-total-container">
        <p className="order-total">Total Amount:</p>
        <p className="order-total-amount">₹{finalAmount}</p>
      </div>
      <div className="divider-sm"></div>
      <button className="btn place-order-btn">PLACE ORDER</button>
    </aside>
  );
};

export default CartAside;
