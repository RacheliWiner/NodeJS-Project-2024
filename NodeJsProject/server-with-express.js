//require('dotenv').config();
import { configDotenv } from 'dotenv';
configDotenv()
//const express = require('express');
import  express  from 'express';
const app = express();

//const studentsRouter = require('./routers/StudentsRouter');
//const coursesRouter = require('./routers/CoursesRouter');
import requestRouter from './routers/StudentsRouter.js';
import volunteerRouter from './routers/CoursesRouter.js';
// const hostname = process.env.HOST_NAME;//'127.0.0.1';//localhost
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(express.json());//will extract data from body - so we don't ned to register to 'data' and 'end' events


app.use('/api/requests', requestRouter);
app.use('/api/volunterr', volunteerRouter);
app.use('/', (req, res) => {
    res.send('welcome to our api');
})
//app.use()//handle errors

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

