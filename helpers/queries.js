const postUser = 'INSERT INTO user (username, password) VALUES (?,?)';
const getUserByUserName =  'SELECT * FROM user WHERE username=?';
const getTasksByUser = 'SELECT * FROM task WHERE user_id=?';

module.exports = {postUser, getUserByUserName, getTasksByUser}