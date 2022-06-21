const express = require('express')
const userRoute = require('./routes/userRoute');
const app = express()
const port = 3000

app.use(express.json());

app.use('/user', userRoute)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))