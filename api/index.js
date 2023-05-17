import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// all routes
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import videosRoute from "./routes/videos.js";
import commentsRoute from "./routes/comments.js";

const app = express();
dotenv.config();

// DB connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database Connection Successfull...");
  })
  .catch((err) => {
    console.log(`DB Error: ${err}`);
  });

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// routes end points
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/videos", videosRoute);
app.use("/api/comments", commentsRoute);

// middleware from error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
  });
});

// Listining Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listen on port- ${port}`);
});
