import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();

// register
router.post("/signup", signup);

// Login
router.post("/signin", signin);

// Google Authentication
router.post("/google", googleAuth);

// router.get("/test", (req, res) => {
//   res.cookie("token", "token string").send("test page");
// });

// router.get("/test1", (req, res) => {
//   res.cookie("atoken", "tokenstring").send("test page");
// });

// router.get("/test2", (req, res) => {
//   res
//     .cookie("token2", "tokenstring dfdsf", { httpOnly: true })
//     .send("test page2");
// });
export default router;
