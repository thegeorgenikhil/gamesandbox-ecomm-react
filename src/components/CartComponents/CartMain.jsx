import React from "react";
import "./styles/CartMain.css";
import { BsFillPenFill } from "react-icons/bs";
import { useAuth } from "../../context/authContext";

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
  const { auth } = useAuth();
  const { user } = auth;
  return (
    <main className="cart-main">
      <p className="filter-heading">GENERAL INFORMATION</p>
      <div className="divider-sm"></div>
      <h2 className="customer-name">Hello, {user.name}</h2>
      <div className="customer-details">
        <CustomerDetailContainer detail={user.email} detailName="EMAIL" />
        <CustomerDetailContainer
          detail={user.phoneNumber}
          detailName="PHONE NUMBER"
        />
        <CustomerDetailContainer detailName="ADDRESS" />
      </div>
    </main>
  );
};

export default CartMain;
