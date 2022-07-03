const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorMiddleware');
const userRoute = require('./routes/userRoute');
const tasksRoute = require('./routes/tasksRoute');

const app = express()

app.use(cors());

app.use(express.json());

app.use('/user', userRoute);

app.use('/tasks', tasksRoute);

app.use(errorMiddleware);

module.exports = app;