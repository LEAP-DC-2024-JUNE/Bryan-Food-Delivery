export const getCategories = async (): Promise<CategoryType[]> => {
  const response = await fetch("http://localhost:8000/food-category");
  const data: CategoryResponseType = await response.json();
  const categories = data.categories;
  console.log(categories);

  return categories;
};
