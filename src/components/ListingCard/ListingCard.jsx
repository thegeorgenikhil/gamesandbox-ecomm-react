import React from "react";
import "./ListingCard.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { addItemToCart } from "../../services/CartServices/addItemToCart";
import { useUserInfo } from "../../context/userInfoContext";
import { useAlert } from "../../context/alertContext";
import { addItemToWishlist } from "../../services/WishlistServices/addToWishList";
import { isProductInWishlist } from "../../services/WishlistServices/isProductInWishlist";
import { removeFromWishlist } from "../../services/WishlistServices/removeFromWishlist";

const ListingCard = ({ productItem, authToken }) => {
  const { title, price, imgURL, rating, _id } = productItem;
  const {
    userInfoDispatch,
    userInfoState: { wishlistItems },
  } = useUserInfo();
  const { alertSetter, alertHide } = useAlert();

  const addToCardHandler = async (product) => {
    const res = await addItemToCart(authToken, product);
    const data = await res.data;
    if (data.cart) {
      userInfoDispatch({
        type: "INCREMENT_CART_PRODUCT",
        payload: { product: product },
      });
      alertSetter({
        alertAction: "ALERT-PRIMARY",
        alertMessage: "Successfully Added To Cart!",
      });
      alertHide();
    }
  };

  const addToWishlistHandler = async (product) => {
    try {
      const res = await addItemToWishlist(authToken, product);
      const data = await res.data;
      if (data.wishlist) {
        userInfoDispatch({
          type: "ADD_TO_WISHLIST",
          payload: { product: product },
        });
        alertSetter({
          alertAction: "ALERT-PRIMARY",
          alertMessage: "Successfully Added To Wishlist",
        });
        alertHide();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWishlistHandler = async (product) => {
    try {
      const res = await removeFromWishlist(authToken, product._id);
      const data = await res.data;
      if (data.wishlist) {
        userInfoDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: { product: product },
        });
        alertSetter({
          alertAction: "ALERT-PRIMARY",
          alertMessage: "Deleted From Wishlist",
        });
        alertHide();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="listing-card">
      <div className="listing-img-container">
        <img src={imgURL} className="listing-img" alt="" />
        {isProductInWishlist(_id, wishlistItems) ? (
          <BsHeartFill
            className="card-wishlist-icon"
            onClick={() => removeFromWishlistHandler(productItem)}
          />
        ) : (
          <BsHeart
            className="card-wishlist-icon"
            onClick={() => addToWishlistHandler(productItem)}
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
            onClick={() => addToCardHandler(productItem)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
