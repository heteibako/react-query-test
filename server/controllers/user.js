const User = require('../models/User');

exports.getAllUsers = async (req, res, next) => {
  const user = await User.find();

  res.status(200).json(user);
};

exports.addNewUser = async (req, res, next) => {
  const { name } = req.body;
  const user = await User.create({
    name,
  });

  res.json(user);
};

exports.deleteUser = async (req, res, next) => {
  const { id } = req.body;
  const user = await User.findById(id);
  await user.remove();
  res.json({ message: 'User removed' });
};
