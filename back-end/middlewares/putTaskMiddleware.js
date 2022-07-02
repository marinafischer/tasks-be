const Joi = require('joi');
const {getTasksByUser} = require('../services/taskService');

const TASK = Joi.object({
  content: Joi.string().required(),
  status: Joi.number().required(),
});

const bodyMiddleware = (req,_res,next) => {
  const task = req.body;
  const {error} = TASK.validate(task);
  if(error) return next({status:400, message:error.message})
  return next();
};

const ownerMiddleware = async (req, res, next) => {
  const tasks = await getTasksByUser(req.user.id);
  if(tasks.length === 0) return next({status:400, message: 'unauthorized'});
  const {id} = req.params;
  const findTask = tasks.find((t)=>+t.id === +id);
  if(!findTask) return next({status:400, message: 'unauthorized'});
  return next()
}

module.exports = {bodyMiddleware, ownerMiddleware}