// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const PrioritiesSchema = new Schema({
    id: int,
    name: String
});


// Compile model from schema
const CitiesModel = mongoose.model("students", PrioritiesSchema);

export default CitiesModel;