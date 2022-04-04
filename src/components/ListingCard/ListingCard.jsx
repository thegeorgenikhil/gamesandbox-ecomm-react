import React from "react";
import "./ListingCard.css";
import { BsHeart } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { addItemToCart } from "../../services/CartServices/addItemToCart";
import { useUserInfo } from "../../context/userInfoContext";
import { useAlert } from "../../context/alertContext";
const ListingCard = ({ productItem, authToken }) => {
  const { title, price, imgURL, rating } = productItem;
  const { userInfoDispatch } = useUserInfo();
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
