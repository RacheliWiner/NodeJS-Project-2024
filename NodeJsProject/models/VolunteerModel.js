// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const VolunteersSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String
});


// Compile model from schema
const VolunteersModel = mongoose.model("volenteers", VolunteersSchema);

export default VolunteersModel;