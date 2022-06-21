const userService = require('../services/userService');

const create = async (req, res) => {
  const user = req.body;
  const token = await userService.create(user);
  res.status(201).json({ token });
};

module.exports = {create}