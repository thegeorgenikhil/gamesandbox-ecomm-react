import React from "react";
import "./HomeCarousel.css";
import Image from "../../assets/home-main-images/main-1.jpg";
import { useUserInfo } from "../../context/userInfoContext";
import { useAuth } from "../../context/authContext";

const HomeCarousel = ({ product }) => {
  const { addToCartHandler } = useUserInfo();
  const {
    auth: { token },
  } = useAuth();
  return (
    <div className="carousel-container">
      <div className="carousel-img-container">
        <img className="carousel-img" src={product.bannerImgURL} alt="" />
      </div>
      <div className="carousel-content">
        <p className="carousel-heading">{product.title}</p>
        <div className="carousel-sub-content">
          <p className="carousel-price">
            from <span className="carousel-price-large">₹{product.price}</span>
            .00
          </p>
        </div>
        <div className="carousel-action-container">
          <button
            className="btn buy-btn"
            onClick={() => addToCartHandler(product, token)}
          >
            ORDER NOW
          </button>
        </div>
      </div>
      <div className="thumbnail-dark-overlay"></div>
    </div>
  );
};

export default HomeCarousel;
