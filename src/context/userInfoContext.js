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
  return (
    <UserInfoContext.Provider value={{ userInfoState, userInfoDispatch }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
