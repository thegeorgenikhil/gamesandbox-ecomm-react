import axios from "axios";

export const cartQuantityChange = async (encodedToken, productId, type) => {
  return await axios.post(
    `/api/user/cart/${productId}`,
    { action: { type } },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};
