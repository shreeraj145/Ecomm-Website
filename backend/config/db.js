import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const dbUrl = process.env.MONGO_URI;

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DATABASE CONNECTED");
    })
    .catch((err) => {
      console.log("OH NO Mongo connection ERROR!!!!");
      console.log(err);
    });
};

export default connectDB;
