import axios from "axios";

export const addItemToCart = (encodedToken, product) => {
  return axios.post("/api/user/cart", product, {
    headers: {
      authorization: encodedToken,
    },
  });
};
