import mongoose from "mongoose";

const moodLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    source: {
      type: String,
      enum: ["text", "emoji", "face"],
      required: true
    },

    rawInput: {
      type: String,
      required: true,
      trim: true
    },

    mood: {
      type: String,
      required: true,
      trim: true
    },

    intensity: {
      type: Number,
      min: 1,
      max: 10,
      required: true
    },

    emotions: {
      type: [String],
      default: []
    },

    context: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const MoodLog = mongoose.model("MoodLog", moodLogSchema);

export default MoodLog;