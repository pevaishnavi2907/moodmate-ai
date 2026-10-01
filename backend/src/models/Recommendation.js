import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema(
  {
    moodLogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MoodLog",
      required: true
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      trim: true
    },

    duration: {
      type: Number
    },

    source: {
      type: String,
      trim: true
    },

    externalUrl: {
      type: String,
      trim: true
    },

    imageUrl: {
      type: String,
      trim: true
    },

    reasonText: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Recommendation = mongoose.model(
  "Recommendation",
  recommendationSchema
);

export default Recommendation;