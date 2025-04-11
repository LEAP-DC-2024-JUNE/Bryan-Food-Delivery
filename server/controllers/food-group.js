import FoodCategory from "../models/food-category.js";
import Food from "../models/food.js";

export const createFoodGroup = async (request, response) => {
  try {
    const groupedFood = await Food.aggregate([
      {
        $group: {
          _id: "$category",
          foods: { $push: "$$ROOT" },
        },
      },
    ]);
    const result = await FoodCategory.populate(groupedFood, {
      path: "_id",
      select: "categoryName",
    });

    response.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
