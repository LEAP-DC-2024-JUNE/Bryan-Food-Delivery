import express from "express";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(express.json());

server.get("", (request, response) => {
  response.json({
    success: true,
    message: "Hello",
  });
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log("Started listening on port: " + PORT);
});
