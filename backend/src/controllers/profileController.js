import Profile from "../models/Profile.js";

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      userId: req.user.userId
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }

    return res.status(200).json({ profile });
  } catch (error) {
    console.error("Get profile error:", error.message);

    return res.status(500).json({
      message: "Unable to retrieve profile"
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const {
      userType,
      course,
      branch,
      year,
      college,
      interests,
      goals,
      preferences,
      cameraAllowed
    } = req.body;

    const updates = {};

    if (userType !== undefined) updates.userType = userType;
    if (course !== undefined) updates.course = course;
    if (branch !== undefined) updates.branch = branch;
    if (year !== undefined) updates.year = year;
    if (college !== undefined) updates.college = college;
    if (interests !== undefined) updates.interests = interests;
    if (goals !== undefined) updates.goals = goals;
    if (preferences !== undefined) updates.preferences = preferences;
    if (cameraAllowed !== undefined) {
      updates.cameraAllowed = cameraAllowed;
    }

    const profile = await Profile.findOneAndUpdate(
      { userId: req.user.userId },
      { $set: updates, $setOnInsert: { userId: req.user.userId } },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true
      }
    );

    return res.status(200).json({
      message: "Profile saved successfully",
      profile
    });
  } catch (error) {
    console.error("Update profile error:", error.message);

    return res.status(500).json({
      message: "Unable to save profile"
    });
  }
};