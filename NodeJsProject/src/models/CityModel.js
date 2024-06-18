// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const CitiesSchema = new Schema({
    id: Number,
    name: String
});


// Compile model from schema
const CitiesModel = mongoose.model('cities', CitiesSchema);

export default CitiesModel;