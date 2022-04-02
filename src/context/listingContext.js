import { React, createContext, useContext, useReducer } from "react";
import { listingReducer } from "../reducers/listingReducer";

const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
  const [listingState, listingDispatch] = useReducer(listingReducer, {
    products: [],
    categoryList: [],
    price: 0,
    rating: 1,
  });
  return (
    <ListingContext.Provider value={{ listingState, listingDispatch }}>
      {children}
    </ListingContext.Provider>
  );
};

export const useListing = () => useContext(ListingContext);
