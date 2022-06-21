const postUser = 'INSERT INTO user (username, password) VALUES (?,?)';
const getUserByUserName =  'SELECT * FROM user WHERE username=?'

module.exports = {postUser, getUserByUserName}