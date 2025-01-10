const User = require('../models/User');

// Get user profile
exports.getProfile = async (req, res) => {
  const user = await User.findById(req.userId).populate('followers following', 'username profilePicture');
  res.json(user);
};

// Update user profile
exports.updateProfile = async (req, res) => {
  const { bio, profilePicture } = req.body;
  const user = await User.findByIdAndUpdate(req.userId, { bio, profilePicture }, { new: true });
  res.json(user);
};
