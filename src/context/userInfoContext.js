import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userInfoReducer } from "../reducers/userInfoReducer";
import { addItemToCart } from "../services/CartServices/addItemToCart";
import { addItemToWishlist } from "../services/WishlistServices/addToWishList";
import { removeFromWishlist } from "../services/WishlistServices/removeFromWishlist";
import { useAlert } from "./alertContext";
import { useAuth } from "./authContext";

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [userInfoState, userInfoDispatch] = useReducer(userInfoReducer, {
    cartItems: [],
    wishlistItems: [],
  });
  const { alertSetter, alertHide } = useAlert();
  const {
    auth: { isAuthenticated },
  } = useAuth();
  const navigate = useNavigate();

  const addToCartHandler = async (product, token) => {
    try {
      if (!isAuthenticated) return navigate("/login");
      const res = await addItemToCart(token, product);
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
    } catch (error) {
      console.error(error);
    }
  };

  const addToWishlistHandler = async (product, token) => {
    try {
      if (!isAuthenticated) return navigate("/login");
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

  const removeFromWishlistHandler = async (product, token) => {
    try {
      if (!isAuthenticated) return navigate("/login");
      const res = await removeFromWishlist(token, product._id);
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
    <UserInfoContext.Provider
      value={{
        userInfoState,
        userInfoDispatch,
        addToCartHandler,
        addToWishlistHandler,
        removeFromWishlistHandler,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
