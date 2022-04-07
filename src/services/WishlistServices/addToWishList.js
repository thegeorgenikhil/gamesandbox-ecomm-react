import axios from "axios";

export const addItemToWishlist = async (encodedToken, product) => {
  return await axios.post("/api/user/wishlist", product, {
    headers: {
      authorization: encodedToken,
    },
  });
};
