const {getTasksByUser} = require('../services/taskService');


const getTasks = async (req,res, next) => {
  try {
    const {id} = req.user;
    const tasks = await getTasksByUser(id);
    return res.status(200).json(tasks);
  } catch (error) {
    next(error)
  }
  
}

module.exports = {getTasks}