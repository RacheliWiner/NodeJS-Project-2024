// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const VolunteersSchema = new Schema({
    id: int,
    firstName: String,
    lastName: String
});


// Compile model from schema
const VolunteersModel = mongoose.model("students", VolunteersSchema);

export default VolunteersModel;