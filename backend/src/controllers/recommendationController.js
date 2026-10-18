import mongoose from "mongoose";
import Recommendation from "../models/Recommendation.js";
import MoodLog from "../models/MoodLog.js";

// Create a recommendation
export const createRecommendation = async (req, res) => {
  try {
    const {
      moodLogId,
      category,
      title,
      description,
      duration,
      source,
      externalUrl,
      imageUrl,
      reasonText
    } = req.body;

    if (
      !moodLogId ||
      !category?.trim() ||
      !title?.trim() ||
      !description?.trim()
    ) {
      return res.status(400).json({
        message: "Mood log ID, category, title, and description are required"
      });
    }

    if (!mongoose.isValidObjectId(moodLogId)) {
      return res.status(400).json({
        message: "Invalid mood log ID"
      });
    }

    const moodLog = await MoodLog.findOne({
      _id: moodLogId,
      userId: req.user.userId
    });

    if (!moodLog) {
      return res.status(404).json({
        message: "Mood log not found"
      });
    }

    const recommendation = await Recommendation.create({
      moodLogId,
      userId: req.user.userId,
      category,
      title,
      description,
      duration,
      source,
      externalUrl,
      imageUrl,
      reasonText
    });

    return res.status(201).json({
      message: "Recommendation created successfully",
      recommendation
    });
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid recommendation data"
      });
    }

    console.error("Create recommendation error:", error.message);
    return res.status(500).json({
      message: "Unable to create recommendation"
    });
  }
};

// Get all recommendations for the authenticated user
export const getRecommendations = async (req, res) => {
  try {
    const recommendations = await Recommendation.find({
      userId: req.user.userId
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      count: recommendations.length,
      recommendations
    });
  } catch (error) {
    console.error("Get recommendations error:", error.message);
    return res.status(500).json({
      message: "Unable to retrieve recommendations"
    });
  }
};

// Get one recommendation by ID
export const getRecommendationById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        message: "Invalid recommendation ID"
      });
    }

    const recommendation = await Recommendation.findOne({
      _id: id,
      userId: req.user.userId
    });

    if (!recommendation) {
      return res.status(404).json({
        message: "Recommendation not found"
      });
    }

    return res.status(200).json({ recommendation });
  } catch (error) {
    console.error("Get recommendation error:", error.message);
    return res.status(500).json({
      message: "Unable to retrieve recommendation"
    });
  }
};