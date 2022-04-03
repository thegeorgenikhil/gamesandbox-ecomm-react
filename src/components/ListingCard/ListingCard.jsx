import React from "react";
import "./ListingCard.css";
import { BsHeart } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
const ListingCard = ({ productItem }) => {
  const { title, price, imgURL, rating } = productItem;
  return (
    <div className="listing-card">
      <div className="listing-img-container">
        <img src={imgURL} className="listing-img" alt="" />
        <BsHeart className="card-wishlist-icon" />
        <div className="card-dark-overlay"></div>
      </div>
      <div className="listing-card-content">
        <div className="listing-card-details">
          <p className="listing-card-name">{title}</p>
          <p className="listing-card-price">₹{price}.00</p>
          <p className="listing-card-rating">
            <AiFillStar />
            {rating}
          </p>
        </div>
        <div className="listing-card-actions">
          <button className="btn card-action-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
