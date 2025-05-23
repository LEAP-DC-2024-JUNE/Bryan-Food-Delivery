import express from "express";
import {
  createFood,
  deleteFood,
  getAllFoods,
  getFood,
  updateFood,
} from "../controllers/food.js";
import { createFoodGroup } from "../controllers/food-group.js";

const router = express.Router();

router.post("", createFood);

router.get("", getAllFoods);
router.get("/grouped", createFoodGroup);

router.get("/:id", getFood);

router.patch("/:id", updateFood);

router.delete("/:id", deleteFood);

export default router;
