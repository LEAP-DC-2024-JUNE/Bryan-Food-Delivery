import FoodCategory from "../models/food-category.js";

export const getFoodCategories = async (request, response) => {
  try {
    const categories = await FoodCategory.find();
    response.json({
      success: true,
      categories,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createFoodCategory = async (request, response) => {
  try {
    const { categoryName } = request.body;
    const category = await FoodCategory.create({ categoryName });
    response.status(201).json({
      success: true,
      category,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateFoodCategory = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await FoodCategory.findByIdAndUpdate(id, request.body);
    response.json({
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

export const deleteFoodCategory = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await FoodCategory.findByIdAndDelete(id);
    response.json({
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
