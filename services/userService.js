const userModel = require('../models/userModel');
const getToken = require('../helpers/getToken');

const create = async(user) => {
  const data = await userModel.create(user);
  return getToken(data);
}

module.exports = {create}