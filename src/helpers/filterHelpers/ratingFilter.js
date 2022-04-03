export const applyRatingFilter = (products, rating) => {
  const filteredArray = products.filter((product) => {
    return Math.floor(product.rating) >= rating;
  });
  return filteredArray;
};
