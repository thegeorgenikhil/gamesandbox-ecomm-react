export const userInfoReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_CART":
      return { ...state, cartItems: action.payload.cart };
    case "INCREMENT_CART_PRODUCT":
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { ...action.payload.product, quantity: 1 },
        ],
      };
    case "DECREMENT_CART_PRODUCT":
      const indexOfProductInCart = state.cartItems.findIndex(
        (item) => item._id === action.payload.product._id
      );
      if (indexOfProductInCart !== -1) {
        const updatedArray = state.cartItems.filter((item, index) => {
          return index !== indexOfProductInCart;
        });
        return {
          ...state,
          cartItems: updatedArray,
        };
      }
    case "CLEAR_USER_DETAILS":
      return { cartItems: [], wishlistItems: [] };
    default:
      return state;
  }
};
