export const applyPriceFilter = (products, priceValue) => {
  const filteredArray = products.filter(
    (product) => Number(product.price) >= Number(priceValue)
  );
  return filteredArray;
};
