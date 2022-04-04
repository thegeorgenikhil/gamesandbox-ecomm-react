// To find the total price of the cart items array
export const cartTotal = (cartItems) => {
  return cartItems.reduce(cartTotalReducer, 0);
};

const cartTotalReducer = (total, item) => total + Number(item.price);
