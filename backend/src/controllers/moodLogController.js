import mongoose from "mongoose";
import MoodLog from "../models/MoodLog.js";

export const createMoodLog = async (req, res) => {
  try {
    const {
      source,
      rawInput,
      mood,
      intensity,
      emotions,
      context
    } = req.body;

    if (
      !source ||
      !rawInput?.trim() ||
      !mood?.trim() ||
      intensity === undefined ||
      intensity === null
    ) {
      return res.status(400).json({
        message: "Source, raw input, mood, and intensity are required"
      });
    }

    const moodLog = await MoodLog.create({
      userId: req.user.userId,
      source,
      rawInput,
      mood,
      intensity,
      emotions,
      context
    });

    return res.status(201).json({
      message: "Mood log created successfully",
      moodLog
    });
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid mood log data",
        error: error.message
      });
    }

    console.error("Create mood log error:", error.message);

    return res.status(500).json({
      message: "Unable to create mood log"
    });
  }
};

export const getMoodLogs = async (req, res) => {
  try {
    const moodLogs = await MoodLog.find({
      userId: req.user.userId
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      count: moodLogs.length,
      moodLogs
    });
  } catch (error) {
    console.error("Get mood logs error:", error.message);

    return res.status(500).json({
      message: "Unable to retrieve mood history"
    });
  }
};

export const getMoodLogById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        message: "Invalid mood log ID"
      });
    }

    const moodLog = await MoodLog.findOne({
      _id: id,
      userId: req.user.userId
    });

    if (!moodLog) {
      return res.status(404).json({
        message: "Mood log not found"
      });
    }

    return res.status(200).json({ moodLog });
  } catch (error) {
    console.error("Get mood log error:", error.message);

    return res.status(500).json({
      message: "Unable to retrieve mood log"
    });
  }
};