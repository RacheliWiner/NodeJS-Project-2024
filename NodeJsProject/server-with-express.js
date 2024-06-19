
import { configDotenv } from 'dotenv';
import express from 'express';
import helpRequestRouter from './src/routers/HelpRequestRouter.js';
import volunteerRouter from './src/routers/VolunteersRouter.js';

configDotenv();

const app = express();
const hostname = process.env.HOST_NAME || '127.0.0.1';
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/requests', helpRequestRouter);
app.use('/api/volunteers', volunteerRouter);
app.use('/', (req, res) => {
    res.send('welcome to our api');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
