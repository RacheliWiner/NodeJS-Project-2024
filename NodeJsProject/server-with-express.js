import { configDotenv } from 'dotenv';
import  express  from 'express';
import helpRequestRouter from './routers/HelpRequestRouter.js'
import volunteerRouter from './routers/VolunteerRouter.js'

configDotenv()
const app = express();
 const hostname = process.env.HOST_NAME;//'127.0.0.1';//localhost
//const hostname = '127.0.0.1';
const port = process.env.PORT || 3001;



app.use(express.json());//will extract data from body - so we don't need to register to 'data' and 'end' events
app.use('/api/requests', helpRequestRouter);
app.use('/api/volunterr', volunteerRouter);
app.use('/', (req, res) => {
    res.send('welcome to our api');
})
//app.use()//handle errors

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})


//connect = 'mongodb+srv://rachel:rv0583296769@nodejs.gxdkmxj.mongodb.net/?retryWrites=true&w=majority&appName=NodeJS'
