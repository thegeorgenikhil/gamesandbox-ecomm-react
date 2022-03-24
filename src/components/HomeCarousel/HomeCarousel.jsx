import React from "react";
import "./HomeCarousel.css";
import Image from "../../assets/home-main-images/main-1.jpg";

const HomeCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-img-container">
        <img className="carousel-img" src={Image} alt="" />
      </div>
      <div className="carousel-content">
        <p className="carousel-heading">Red Dead Redemption 2</p>
        <div className="carousel-sub-content">
          <p className="carousel-price">
            from <span className="carousel-price-large">₹2,399</span>.00
          </p>
        </div>
        <div className="carousel-action-container">
          <button className="btn buy-btn">BUY NOW</button>
          <button className="btn wishlist-btn">ADD TO WISHLIST</button>
        </div>
      </div>
      <div className="thumbnail-dark-overlay"></div>
    </div>
  );
};

export default HomeCarousel;
