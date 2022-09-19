import mongoose from "mongoose";

const connectDB = async () => {
  const conn = mongoose
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