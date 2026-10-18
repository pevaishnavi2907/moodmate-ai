import express from "express";
import {
  createMoodLog,
  getMoodLogs,
  getMoodLogById
} from "../controllers/moodLogController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createMoodLog);
router.get("/", auth, getMoodLogs);
router.get("/:id", auth, getMoodLogById);

export default router;