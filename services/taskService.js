const {getTasks, insertTask} = require('../models/taskModel');

const getTasksByUser = async (user_id) => {
  const tasks = await getTasks(user_id);
  return tasks;
}

const postTask = async (data) => {
  await insertTask(data);
  const tasks = await getTasksByUser(data.user_id);
  return tasks;
}

module.exports = {getTasksByUser, postTask}