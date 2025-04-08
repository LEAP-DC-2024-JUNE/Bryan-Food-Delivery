import express from "express";
import {
  createFoodCategory,
  deleteFoodCategory,
  getFoodCategories,
  updateFoodCategory,
} from "../controllers/food-category.js";

const router = express.Router();

router.get("", getFoodCategories);

router.post("", createFoodCategory);

router.patch("/:id", updateFoodCategory);

router.delete("/:id", deleteFoodCategory);

export default router;
