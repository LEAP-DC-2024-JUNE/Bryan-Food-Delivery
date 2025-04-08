import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.MONGO_URL;

export const connectDB = async () => {
  try {
    await mongoose
      .connect(URL)
      .then(() => console.log("Connected to MongoDB."));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
