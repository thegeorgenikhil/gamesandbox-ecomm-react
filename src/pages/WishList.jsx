import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { BsFillHeartFill } from "react-icons/bs";
import { useUserInfo } from "../context/userInfoContext";
import { removeFromWishlist } from "../services/WishlistServices/removeFromWishlist";
import { addItemToCart } from "../services/CartServices/addItemToCart";
import { useAuth } from "../context/authContext";
import { useAlert } from "../context/alertContext";

const WishListCard = ({ product }) => {
  const { userInfoDispatch } = useUserInfo();
  const {
    auth: { token: authToken },
  } = useAuth();
  const { alertSetter, alertHide } = useAlert();

  const addToCardHandler = async (product) => {
    try {
      const res = await addItemToCart(authToken, product);
      const data = await res.data;
      if (data.cart) {
        removeFromWishlistHandler(product);
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
    } catch (error) {
      console.error(error);
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
      console.error(error);
    }
  };

  return (
    <div className="listing-card">
      <div className="listing-img-container">
        <img src={product.imgURL} className="listing-img" alt={product.name} />
        <BsFillHeartFill
          className="card-wishlist-icon"
          onClick={() => removeFromWishlistHandler(product)}
        />
        <div className="card-dark-overlay"></div>
      </div>
      <div className="listing-card-content">
        <div className="listing-card-details">
          <p className="listing-card-name">{product.name}</p>
          <p className="listing-card-price">₹{product.price}.00</p>
        </div>
        <div className="listing-card-actions">
          <button
            className="btn card-action-btn"
            onClick={() => addToCardHandler(product)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

const WishList = () => {
  const {
    userInfoState: { wishlistItems },
  } = useUserInfo();

  return (
    <div>
      <Navbar />
      {wishlistItems.length > 0 && (
        <>
          <div className="container-lg">
            <h1>MY WISHLIST</h1>
            <div className="divider-sm"></div>
            <div className="wishlist-container">
              {wishlistItems.map((item) => {
                return <WishListCard product={item} key={item._id} />;
              })}
            </div>
          </div>
          <Footer />
        </>
      )}
      {wishlistItems.length === 0 && (
        <div className="container-lg">
          <div className="game-category-heading">
            <h1 className="text-center">Your Wishlist Is Empty</h1>
            <div className="divider-sm"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishList;
