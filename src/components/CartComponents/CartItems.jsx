import React from "react";
import ForzaImg from "../../assets/listing-images/forza-horizon.png";
import { useAlert } from "../../context/alertContext";
import { useAuth } from "../../context/authContext";
import { useUserInfo } from "../../context/userInfoContext";
import { cartItemReducer } from "../../helpers/cartHelpers/cartItemReducer";
import { cartQuantityChange } from "../../services/CartServices/cartQuantityChange";
import { deleteFromCart } from "../../services/CartServices/deleteFromCart";
import { addItemToWishlist } from "../../services/WishlistServices/addToWishList";
import "./styles/CartItems.css";

const CartItemCard = ({ item }) => {
  const { title, price, quantity, imgURL, _id } = item;
  const { userInfoDispatch, userInfoState } = useUserInfo();
  const { alertSetter, alertHide } = useAlert();
  const { cartItems } = userInfoState;
  const { auth } = useAuth();
  const { token } = auth;

  const cartDeleteHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await deleteFromCart(token, _id);
      const data = await res.data;
      if (data.cart) {
        const updatedCart = cartItems.filter(
          (cartItem) => cartItem._id !== item._id
        );
        userInfoDispatch({
          type: "SET_USER_CART",
          payload: { cart: updatedCart },
        });
        alertSetter({
          alertAction: "ALERT-DANGER",
          alertMessage: "Item Deleted From Cart!",
        });
        alertHide();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlistHandler = async (product) => {
    try {
      const res = await addItemToWishlist(token, product);
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

  const cartQuantityChangeHandler = async (operation) => {
    const res = await cartQuantityChange(token, _id, operation);
    const data = res.data;
    if (data.cart) {
      userInfoDispatch({
        type: `${operation.toUpperCase()}_CART_PRODUCT`,
        payload: { product: item },
      });
    }
  };
  return (
    <div className="cart-item-card">
      <div className="cart-item-img-container">
        <img src={imgURL} className="cart-item-img" alt="" />
      </div>
      <div className="cart-item-content">
        <div className="cart-item-details">
          <p className="cart-item-name">{title}</p>
          <p className="cart-item-price">₹{price}.00</p>
        </div>
        <div className="cart-item-quantity-container">
          <p className="quantity-label">Quantity:</p>
          <div className="quantity-container">
            <button
              className="quantity-btn"
              onClick={() => cartQuantityChangeHandler("decrement")}
            >
              -
            </button>
            <p className="quantity-value">{quantity}</p>
            <button
              className="quantity-btn"
              onClick={() => cartQuantityChangeHandler("increment")}
            >
              +
            </button>
          </div>
        </div>
        <div className="cart-item-actions">
          <button className="btn cart-remove-btn" onClick={cartDeleteHandler}>
            REMOVE FROM CART
          </button>
          <button
            className="btn cart-wishlist-add-btn"
            onClick={() => addToWishlistHandler(item)}
          >
            ADD TO WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};
const CartItems = () => {
  const { userInfoState } = useUserInfo();
  const { cartItems } = userInfoState;
  // To filter the cart items again according to quantity
  const filteredCartItems = cartItems.reduce(cartItemReducer, []);
  return (
    <div className="cart-items-container">
      <p className="filter-heading">CART ITEMS</p>
      <div className="divider-sm"></div>
      <div className="cart-item-container">
        {filteredCartItems.map((item) => {
          return <CartItemCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CartItems;
