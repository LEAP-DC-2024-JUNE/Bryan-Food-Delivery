import { MongoClient } from "mongodb";

export const connectDB = async () => {
  const client = new MongoClient(
    "mongodb+srv://duluuf:LM7miFmm6q0eg0Qa@cluster1.pyncrqd.mongodb.net/"
  );
  let connection;
  try {
    connection = await client.connect();
    console.log("Successfully connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
  return connection.db("Batkhuleg").collection("users");
};
