import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoute.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;
const environment = process.env.NODE_ENV;

app.listen(
  port,
  console.log(`Server running in ${environment} mode on port ${port}`)
);
