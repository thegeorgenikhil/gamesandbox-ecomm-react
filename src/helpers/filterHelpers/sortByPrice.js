export const sortByPrice = (products, sortType) => {
  const sortedProductsArr = products;
  if (sortType === "price-low-to-high") {
    sortedProductsArr.sort((itemOne, itemTwo) => itemOne.price - itemTwo.price);
  }
  if (sortType === "price-high-to-low") {
    sortedProductsArr.sort((itemOne, itemTwo) => itemTwo.price - itemOne.price);
  }
  return sortedProductsArr;
};
