import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { BsFillHeartFill } from "react-icons/bs";
import { useUserInfo } from "../context/userInfoContext";
import { useAuth } from "../context/authContext";

const WishListCard = ({ product }) => {
  const { addToCartHandler, removeFromWishlistHandler } = useUserInfo();
  const {
    auth: { token },
  } = useAuth();

  const addToCartAndRemoveFromWishlist = (product, token) => {
    addToCartHandler(product, token)
      .then(() => removeFromWishlistHandler(product, token))
      .catch((err) => console.log(err));
  };

  return (
    <div className="listing-card">
      <div className="listing-img-container">
        <img src={product.imgURL} className="listing-img" alt={product.name} />
        <BsFillHeartFill
          className="card-wishlist-icon"
          onClick={() => removeFromWishlistHandler(product, token)}
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
            onClick={() => addToCartAndRemoveFromWishlist(product, token)}
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
