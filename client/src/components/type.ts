type CategoryType = {
  _id: string;
  categoryName: string;
};

type CategoryResponseType = {
  success: boolean;
  categories: CategoryType[];
};
