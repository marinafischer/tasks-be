const connection = require('./connection');
const {getTasksByUser, postTask} = require('../helpers/queries');

const getTasks = async (user_id) => {
  const [data] = await connection.execute(getTasksByUser, [user_id]);
  return data;
};

const insertTask = async ({user_id, content, status=1}) => {
  const [data] = await connection.execute(postTask, [user_id, content, status]);
  const { insertId } = data;
  return insertId;
}


module.exports = {getTasks, insertTask}