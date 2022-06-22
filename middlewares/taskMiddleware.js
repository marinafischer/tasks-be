const Joi = require('joi');

const TASK = Joi.object({
  content: Joi.string().required(),
  status: Joi.number(),
});

module.exports = (req,res,next) => {
  const task = req.body;
  const {error} = TASK.validate(task);
  if(error) return next({status:400, message:error.message})
  return next();
};