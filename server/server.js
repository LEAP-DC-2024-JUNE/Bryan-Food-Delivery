import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/mongo-db.js";
import foodCategoryRouter from "./routers/food-category.router.js";
import foodRouter from "./routers/food.router.js";
import authRouter from "./routers/authentication.router.js";

dotenv.config();

connectDB();

const server = express();

server.use(express.json());

server.use("/food-category", foodCategoryRouter);
server.use("/food", foodRouter);
server.use("/auth", authRouter);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log("Started listening on port: " + PORT);
});
