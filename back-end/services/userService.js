const userModel = require('../models/userModel');
const getToken = require('../helpers/getToken');

const create = async(user) => {
  const data = await userModel.create(user);
  return getToken(data);
}

const getByUsername = async(username) => {
  const data = await userModel.getByUserName(username);
  return data;
}

module.exports = {create, getByUsername}