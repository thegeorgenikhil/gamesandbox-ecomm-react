import axios from "axios";

export const removeFromWishlist = async (encodedToken, productId) => {
  return await axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
