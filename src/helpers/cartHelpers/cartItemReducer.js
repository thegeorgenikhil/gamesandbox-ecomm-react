export const cartItemReducer = (cartItems, item) => {
  const isItemAlreadyPresent = cartItems.findIndex(
    (cartItem) => cartItem._id === item._id
  );
  if (isItemAlreadyPresent !== -1) {
    const updatedArr = [...cartItems];
    updatedArr[isItemAlreadyPresent] = {
      ...updatedArr[isItemAlreadyPresent],
      quantity: updatedArr[isItemAlreadyPresent].quantity + 1,
    };
    return [...updatedArr];
  }
  return [...cartItems, item];
};
