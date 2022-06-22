const connection = require('./connection');
const {getTasksByUser} = require('../helpers/queries');

const getTasks = async (user_id) => {
  const [data] = await connection.execute(getTasksByUser, [user_id]);
  return data;
};


module.exports = {getTasks}