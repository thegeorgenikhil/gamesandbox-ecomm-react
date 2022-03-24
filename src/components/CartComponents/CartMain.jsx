import React from "react";
import "./styles/CartMain.css";
import { BsFillPenFill } from "react-icons/bs";

const CustomerDetailContainer = ({ detailName, detail }) => {
  return (
    <div className="customer-detail-container">
      <div className="customer-detail-edit">
        <p className="filter-heading">{detailName}</p>
        <BsFillPenFill className="edit-detail-btn" />
      </div>
      <div className={`customer-detail ${!detail && "grayed-out-text"}`}>
        {detail || `Add ${detailName.toLowerCase()}`}
      </div>
    </div>
  );
};

const CartMain = () => {
  return (
    <main className="cart-main">
      <p className="filter-heading">GENERAL INFORMATION</p>
      <div className="divider-sm"></div>
      <h2 className="customer-name">Hello, Nikhil</h2>
      <div className="customer-details">
        <CustomerDetailContainer
          detail={"nikhilgeorge2015@gmail.com"}
          detailName="EMAIL"
        />
        <CustomerDetailContainer
          detail={"920XXXXX98"}
          detailName="PHONE NUMBER"
        />
        <CustomerDetailContainer detailName="EMAIL" />
      </div>
    </main>
  );
};

export default CartMain;
