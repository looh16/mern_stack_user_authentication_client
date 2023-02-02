const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json)
const authRoute = require("./routes/auth")
const mongodbConnection = require("./config/mongodbConnection")
const port = 5000;
app.use('api/auth', authRoute)

app.get('/', (req, res) => res.send('Hello Word!'));
app.listen(port, () => console.log(`Server is Running on Port ${port}!`));