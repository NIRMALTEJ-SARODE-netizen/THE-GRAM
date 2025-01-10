const Message = require('../models/Message');

// Send a message
exports.sendMessage = async (req, res) => {
  const { receiverId, message } = req.body;
  const senderId = req.userId;

  const newMessage = new Message({
    sender: senderId,
    receiver: receiverId,
    message,
  });

  await newMessage.save();
  res.status(201).json(newMessage);
};

// Get messages between two users
exports.getMessages = async (req, res) => {
  const { userId } = req.params;
  const currentUserId = req.userId;

  const messages = await Message.find({
    $or: [
      { sender: currentUserId, receiver: userId },
      { sender: userId, receiver: currentUserId },
    ],
  }).populate('sender receiver', 'username profilePicture');

  res.json(messages);
};
