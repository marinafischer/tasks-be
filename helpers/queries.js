const postUser = 'INSERT INTO user (username, password) VALUES (?,?)';
const getUserByUserName =  'SELECT * FROM user WHERE username=?';
const getTasksByUser = 'SELECT * FROM task WHERE user_id=?';
const postTask = 'INSERT INTO task (user_id, content, status) VALUES (?,?,?)';

module.exports = {postUser, getUserByUserName, getTasksByUser, postTask}