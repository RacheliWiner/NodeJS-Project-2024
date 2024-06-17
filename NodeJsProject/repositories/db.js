//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
import mongoose from 'mongoose';


// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

export default async function connect() {
    //priority - will work only in seminar
    //if you have school database at home, you can change priority to localhost
    await mongoose.connect("mongodb://priority:27017/Racheli&Shira_NodeJs"/*process.env.CONN_STRING*/);
};



// // Define the database URL to connect to.
// const mongoDB = "mongodb://127.0.0.1/my_database";

// // Wait for database to connect, logging an error if there is a problem
// main().catch((err) => console.log(err));
// async function main() {
//     await mongoose.connect(mongoDB);
// }