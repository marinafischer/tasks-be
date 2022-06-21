const connection = require('./connection');
const {postUser} = require('../helpers/queries');

const create= async(user) => {
  const { username, password } = user;
  const [data] = await connection.execute(postUser, [username, password]);
  const { insertId } = data;
  return {
    id: insertId, username,
  };
}

module.exports = {create}
