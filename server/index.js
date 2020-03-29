const express = require('express');
const mongoose = require('mongoose')
const app = express();
const postRoute = require('./routes/posts')
const getRoute = require('./routes/get')
const bodyParse = require('body-parser');
const cors = require('cors');
require('dotenv/config')

app.use(bodyParse.json());
app.use(cors());

//middlewares
app.use('/posts', postRoute);
app.use('/get', getRoute);


//Routes

// app.get('/', (req, res) => {
//     res.send('we are on home');
// });

// app.get ('/posts', (req, res) => {
//     res.send('we are on posts');
// });

//Connect to mongoose
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to db'));

//How do we start listening to the server
app.listen(5000);