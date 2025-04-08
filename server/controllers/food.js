import Food from "../models/food.js";

export const createFood = async (request, response) => {
  try {
    const food = await Food.create(request.body);
    response.status(201).json({
      success: true,
      food,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllFoods = async (request, response) => {
  try {
    const foods = await Food.find();
    response.json({
      success: true,
      foods,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFood = async (request, response) => {
  try {
    const { id } = request.params;
    const food = await Food.findById(id);
    if (!food) {
      return response.status(404).json({
        success: false,
        message: "Food not found",
      });
    }
    response.json({
      success: true,
      food,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateFood = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Food.findByIdAndUpdate(id, request.body);
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

export const deleteFood = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Food.findByIdAndDelete(id);
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
