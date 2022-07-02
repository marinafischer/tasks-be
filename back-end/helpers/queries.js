const postUser = 'INSERT INTO user (username, password) VALUES (?,?)';
const getUserByUserName =  'SELECT * FROM user WHERE username=?';
const getTasksByUser = 'SELECT * FROM task WHERE user_id=?';
const postTask = 'INSERT INTO task (user_id, content, status) VALUES (?,?,?)';
const updateTask = 'UPDATE task SET content = ?, status = ? WHERE id = ?;'
const deleteTask = 'DELETE FROM task WHERE id = ?;'

module.exports = {postUser, getUserByUserName, getTasksByUser, postTask, updateTask, deleteTask}