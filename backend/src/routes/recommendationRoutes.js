import express from "express";
import {
  createRecommendation,
  getRecommendations,
  getRecommendationById
} from "../controllers/recommendationController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createRecommendation);
router.get("/", auth, getRecommendations);
router.get("/:id", auth, getRecommendationById);

export default router;