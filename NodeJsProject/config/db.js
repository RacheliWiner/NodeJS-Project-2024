
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv();


mongoose.set("strictQuery", false);

export default async function connect() {
    try{
    await mongoose.connect(process.env.CONNECT);
    }
    catch(err){
        throw(err);
    }
};

