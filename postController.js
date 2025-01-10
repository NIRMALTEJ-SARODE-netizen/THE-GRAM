const Post = require('../models/Post');

// Create a new post
exports.createPost = async (req, res) => {
  const { imageUrl, caption, location, tags } = req.body;
  const userId = req.userId;

  const newPost = new Post({
    user: userId,
    imageUrl,
    caption,
    location,
    tags,
  });

  await newPost.save();
  res.status(201).json(newPost);
};

// Get all posts
exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate('user', 'username profilePicture').sort({ createdAt: -1 });
  res.json(posts);
};
