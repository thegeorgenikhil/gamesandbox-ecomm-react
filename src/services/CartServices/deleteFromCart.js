import axios from "axios";

export const deleteFromCart = async (encodedToken, productId) => {
  return await axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
