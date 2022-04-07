import { React, createContext, useContext, useReducer, useEffect } from "react";
import { maxPriceReducer } from "../helpers/maxPriceReducer";
import { listingReducer } from "../reducers/listingReducer";
import { getAllProducts } from "../services/products";

const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
  const [listingState, listingDispatch] = useReducer(listingReducer, {
    products: [],
    categoryList: [],
    price: 0,
    rating: 1,
    maxPrice: 0,
  });

  useEffect(async () => {
    const res = await getAllProducts();
    const data = await res.data;
    const maxPrice = data.products.reduce(maxPriceReducer, 0);
    listingDispatch({
      type: "PRODUCT_LIST_SET",
      payload: { products: data.products, price: Number(maxPrice) },
    });
  }, []);
  return (
    <ListingContext.Provider value={{ listingState, listingDispatch }}>
      {children}
    </ListingContext.Provider>
  );
};

export const useListing = () => useContext(ListingContext);
