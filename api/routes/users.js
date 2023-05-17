import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribed,
  unsubscribed,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Update
router.put("/:id", verifyToken, update);

router.delete("/:id", verifyToken, deleteUser);

router.get("/find/:id", getUser);

router.put("/sub/:id", verifyToken, subscribed);

router.put("/unsub/:id", verifyToken, unsubscribed);

router.put("/like/:videoId", verifyToken, like);

router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
