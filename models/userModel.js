const connection = require('./connection');
const {postUser, getUserByUserName} = require('../helpers/queries');

const create= async(user) => {
  const { username, password } = user;
  const [data] = await connection.execute(postUser, [username, password]);
  const { insertId } = data;
  return {
    id: insertId, username,
  };
};

const getByUserName = async(username)=> {
  const [data] = await connection.execute(getUserByUserName, [username]);
  const [user] = data;
  if (user) return user;
  return {};
}

module.exports = {create, getByUserName}
