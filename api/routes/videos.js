import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTags,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
} from "../controllers/video.js";

const router = express.Router();

router.post("/", verifyToken, addVideo);

router.put("/:id", verifyToken, updateVideo);

router.delete("/:id", verifyToken, deleteVideo);

router.get("/find/:id", getVideo);

router.put("/view/:id", verifyToken, addView);

router.get("/trend", trend);

router.get("/random", random);

router.get("/sub/:id", verifyToken, sub);

router.get("/tags", getByTags);

router.get("/search", search);

export default router;
