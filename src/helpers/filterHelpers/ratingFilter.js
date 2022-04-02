export const applyRatingFilter = (products, rating) => {
  const filteredArray = products.filter((product) => {
    Math.floor(product.rating) >= rating;
  });
  return filteredArray;
};
