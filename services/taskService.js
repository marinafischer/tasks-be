const {getTasks} = require('../models/taskModel');

const getTasksByUser = async (user_id) => {
  const tasks = await getTasks(user_id);
  return tasks;
}

module.exports = {getTasksByUser}