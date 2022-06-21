const Joi = require('joi');
const {getByUsername} = require('../services/userService');
const getToken = require('../helpers/getToken');

const USER = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(32),
});

const userMiddleware = (req, res, next) => {
  const user = req.body;
  const {error} = USER.validate(user);
  if(error) return next({status:400, message:error.message})
  return next();
};

const verifyUser = async(req, res, next) => {
  const {username, password} = req.body;
  const data = await getByUsername(username);
  if(!data.password) return next();
  if(data.password !== password) {
    return next({status:400, message: 'invalid password'});
  }
  const token = getToken({id:data.id, username:data.username});
  return res.status(200).json({token});
}

module.exports = {userMiddleware, verifyUser};