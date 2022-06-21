const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const userRoute = require('./routes/userRoute');
const app = express()
const port = 3000

app.use(express.json());

app.use('/user', userRoute)

app.get('/', (req, res) => res.send('Hello World!'))

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))