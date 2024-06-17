// //require('dotenv').config();
// import { configDotenv } from 'dotenv';
// configDotenv()
// //const express = require('express');
// import  express  from 'express';
// const app = express();

// //const studentsRouter = require('./routers/StudentsRouter');
// //const coursesRouter = require('./routers/CoursesRouter');
// import studentsRouter from './routers/StudentsRouter.js';
// import coursesRouter from './routers/CoursesRouter.js';
// const hostname = process.env.HOST_NAME;//'127.0.0.1';//localhost
// const port = process.env.PORT;

// app.use(express.json());//will extract data from body - so we don't ned to register to 'data' and 'end' events


// app.use('/api/students', studentsRouter);
// app.use('/api/courses', coursesRouter);
// app.use('/', (req, res) => {
//     res.send('welcome to our api');
// })
// //app.use()//handle errors

// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

