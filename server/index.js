require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

//Routers
const authRouter = require('./routes/auth.js');

//Connect to db
mongoose.connect(process.env.CONN_STR);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

//Set up middlewares
app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);

app.listen(process.env.PORT, () => console.log(`Server started at: http://localhost:${process.env.PORT}`));