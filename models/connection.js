const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host:'localhost',
  user: 'root',
  password: '1234',
  database: 'tasksDB',
});

module.exports = connection;