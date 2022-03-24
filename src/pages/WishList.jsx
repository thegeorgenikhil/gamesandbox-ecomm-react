import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ForzaImg from "../assets/listing-images/forza-horizon.png";
import { BsFillHeartFill } from "react-icons/bs";

const WishListCard = () => {
  return (
    <div className="listing-card">
      <div className="listing-img-container">
        <img src={ForzaImg} className="listing-img" alt="" />
        <BsFillHeartFill className="card-wishlist-icon" />
        <div className="card-dark-overlay"></div>
      </div>
      <div className="listing-card-content">
        <div className="listing-card-details">
          <p className="listing-card-name">Forza Horizon 5</p>
          <p className="listing-card-price">₹2,399.00</p>
        </div>
        <div className="listing-card-actions">
          <button className="btn card-action-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

const WishList = () => {
  return (
    <div>
      <Navbar />
      <div className="container-lg">
        <h1>MY WISHLIST</h1>
        <div className="divider-sm"></div>
        <div className="wishlist-container">
          <WishListCard />
          <WishListCard />
          <WishListCard />
          <WishListCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishList;
