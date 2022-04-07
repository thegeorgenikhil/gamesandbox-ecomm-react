export const isProductInWishlist = (id, wishlistArr) => {
  return wishlistArr.find((item) => item._id === id);
};
