import { connectDB } from "./connect-db.js";
import express from "express";
import { ObjectId } from "mongodb";
import morgan from "morgan";
import cors from "cors";

const server = express();
const PORT = 3001;

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

// Create user
server.post("/create-user", async (request, response) => {
  let db = await connectDB();
  const { name, age, phone } = request.body;

  if (!name || !age || !phone || name === "" || age === "" || phone === "") {
    return response.status(400).json({
      success: false,
      message: "Missing information",
    });
  }
  try {
    let result = await db.insertOne({ name, age, phone });
    response.json({
      success: true,
      result,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      error,
    });
  }
});

// Get all users
server.get("/get-all-users", async (request, response) => {
  let db = await connectDB();
  try {
    let result = await db.find().toArray();
    response.json({
      success: true,
      result,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      error,
    });
  }
});

// Get a user by id
server.get("/get-user-by-id/:id", async (request, response) => {
  let db = await connectDB();
  let id = request.params.id;
  try {
    let result = await db.findOne({ _id: new ObjectId(id) });
    response.json({
      success: true,
      result,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      error,
    });
  }
});

// Update a user
server.put("/update-user/:id", async (request, response) => {
  let db = await connectDB();
  let id = request.params.id;
  try {
    let { name, age, phone } = request.body;
    let result = await db.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { name, age, phone } }
    );
    response.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      success: false,
      error,
    });
  }
});

// Delete a user
server.delete("/delete-user/:id", async (request, response) => {
  let db = await connectDB();
  let id = request.params.id;
  try {
    let result = await db.deleteOne({ _id: new ObjectId(id) });
    response.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      success: false,
      error,
    });
  }
});

server.listen(PORT, () => console.log("Server started on " + PORT));
