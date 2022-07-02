const userService = require('../services/userService');

const create = async (req, res, next) => {
  const user = req.body;
  try {
    const token = await userService.create(user);
    return res.status(201).json({ token });
  } catch (error) {
    next(error)
  }
  
};

module.exports = {create}