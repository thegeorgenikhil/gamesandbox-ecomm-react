import { createContext, useContext, useReducer, useEffect } from "react";
import { userInfoReducer } from "../reducers/userInfoReducer";
import { getUserCartDetails } from "../services/CartServices/getUserCartDetails";
import { useAuth } from "./authContext";

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [userInfoState, userInfoDispatch] = useReducer(userInfoReducer, {
    cartItems: [],
    wishlistItems: [],
  });
  const { auth } = useAuth();
  const { isAuthenticated, token } = auth;
  useEffect(async () => {
    isAuthenticated &&
      (async () => {
        try {
          const res = await getUserCartDetails(token);
          const data = await res.data;
          userInfoDispatch({
            type: "SET_USER_CART",
            payload: { cart: data.cart },
          });
        } catch (error) {
          console.log(error);
        }
      })();
  }, [isAuthenticated]);
  return (
    <UserInfoContext.Provider value={{ userInfoState, userInfoDispatch }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
