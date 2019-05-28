const express = require("express");
const dotenv = require("dotenv");

const app = express();

// import router
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, () => {
    console.log("Connect to DB");
});

// Middlewares
app.use(express.json());


// router MiddLewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => {
    console.log("listening on port 3000");
})