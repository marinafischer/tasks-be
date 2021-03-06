const {getTasksByUser, postTask, updateTask, deleteTask} = require('../services/taskService');

const getTasks = async (req,res, next) => {
  try {
    const {id} = req.user;
    const tasks = await getTasksByUser(id);
    return res.status(200).json(tasks);
  } catch (error) {
    next(error)
  }
}

const insertTask = async (req, res, next) => {
  try {
    const {id} = req.user;
    const tasks = await postTask({...req.body, user_id: id})
    res.status(201).json(tasks);
  } catch (error) {
    next(error);
  }
}

const putTask = async (req, res, next) => {
  try {
    const {id} = req.params;
    const data = {...req.body, id, user_id: req.user.id}
    const tasks = await updateTask(data);
    res.status(200).json(tasks)
  } catch (error) {
    next(error);
  }
}

const delTask = async(req, res, next) => {
  try {
    const {id} = req.params;
    const {id:user_id} = req.user;
    const task = await deleteTask(id, user_id)
    res.status(200).json(task)
  } catch (error) {
    next(error);
  }
}

module.exports = {getTasks, insertTask, putTask, delTask}