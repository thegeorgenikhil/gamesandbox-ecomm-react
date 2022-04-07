import axios from "axios";

export const addItemToCart = async (encodedToken, product) => {
  return await axios.post("/api/user/cart", product, {
    headers: {
      authorization: encodedToken,
    },
  });
};
