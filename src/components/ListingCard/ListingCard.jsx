import React from "react";
import "./ListingCard.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useUserInfo } from "../../context/userInfoContext";
import { isProductInWishlist } from "../../services/WishlistServices/isProductInWishlist";
import { useAuth } from "../../context/authContext";

const ListingCard = ({ productItem, authToken }) => {
  const { title, price, imgURL, rating, _id } = productItem;
  const {
    userInfoState: { wishlistItems },
    addToCartHandler,
    removeFromWishlistHandler,
    addToWishlistHandler,
  } = useUserInfo();
  const {
    auth: { token },
  } = useAuth();

  return (
    <div className="listing-card">
      <div className="listing-img-container">
        <img src={imgURL} className="listing-img" alt="" />
        {isProductInWishlist(_id, wishlistItems) ? (
          <BsHeartFill
            className="card-wishlist-icon"
            onClick={() => removeFromWishlistHandler(productItem, authToken)}
          />
        ) : (
          <BsHeart
            className="card-wishlist-icon"
            onClick={() => addToWishlistHandler(productItem, authToken)}
          />
        )}
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
          <button
            className="btn card-action-btn"
            onClick={() => addToCartHandler(productItem, authToken)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
