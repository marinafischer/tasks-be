const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const userRoute = require('./routes/userRoute');
const tasksRoute = require('./routes/tasksRoute');

const app = express()
const port = 3000

app.use(express.json());

app.use('/user', userRoute);

app.use('/tasks', tasksRoute);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))