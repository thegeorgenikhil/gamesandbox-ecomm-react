export const maxPriceReducer = (maxPrice, currValue) => {
  if (Number(currValue.price) > Number(maxPrice)) return currValue.price;
  return maxPrice;
};
