export const updateCategoryList = (
  categoryName,
  isCategoryChecked,
  categoryList
) => {
  // To add a new category to the category list
  if (isCategoryChecked && !categoryList.includes(categoryName)) {
    return [...categoryList, categoryName.toUpperCase()];
  }
  // remove a pre-existing category from the category list
  return categoryList.filter(
    (category) => category.toUpperCase() !== categoryName.toUpperCase()
  );
};
