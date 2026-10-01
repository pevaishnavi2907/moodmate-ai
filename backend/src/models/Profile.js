import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },

    userType: {
      type: String
    },

    course: {
      type: String
    },

    branch: {
      type: String
    },

    year: {
      type: Number
    },

    college: {
      type: String
    },

    interests: {
      type: [String],
      default: []
    },

    goals: {
      type: [String],
      default: []
    },

    preferences: {
      music: {
        type: Boolean,
        default: false
      },
      movies: {
        type: Boolean,
        default: false
      },
      activities: {
        type: Boolean,
        default: false
      }
    },

    cameraAllowed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;