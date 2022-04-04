import axios from "axios";

export const getUserCartDetails = async (encodedToken) => {
  return await axios.get("/api/user/cart", {
    headers: {
      authorization: encodedToken,
    },
  });
};
