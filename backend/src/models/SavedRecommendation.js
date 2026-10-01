import mongoose from "mongoose";

const savedRecommendationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    recommendationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recommendation",
      required: true
    }
  },
  {
    timestamps: true
  }
);

const SavedRecommendation = mongoose.model(
  "SavedRecommendation",
  savedRecommendationSchema
);

export default SavedRecommendation;