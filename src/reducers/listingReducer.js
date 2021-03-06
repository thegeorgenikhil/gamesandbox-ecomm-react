import { updateCategoryList } from "../helpers/filterHelpers/cateogryFilter";
import { sortByPrice } from "../helpers/filterHelpers/sortByPrice";

export const listingReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_SET":
      return {
        ...state,
        products: action.payload.products,
        maxPrice: action.payload.price,
        price: action.payload.price,
      };
    case "LISTING_SORT":
      const {
        payload: { products, sortType },
      } = action;
      const sortedProducts = sortByPrice(products, sortType);
      return { ...state, products: sortedProducts };
    case "LISTING_CATEGORY_FILTER":
      const {
        payload: { categoryName, isChecked },
      } = action;
      const { categoryList } = state;
      const updatedCategoryList = updateCategoryList(
        categoryName,
        isChecked,
        categoryList
      );
      return { ...state, categoryList: updatedCategoryList };
    case "UPDATE_SINGLE_CATEGORY":
      return { ...state, categoryList: [action.payload.categoryName] };
    case "UPDATE_LISTING_PRICE":
      return { ...state, price: action.payload.price };
    case "UPDATE_LISTING_RATING":
      return { ...state, rating: action.payload.rating };
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        categoryList: [],
        price: action.payload.maxPrice,
        rating: 1,
      };
    default:
      return { ...state };
  }
};
