// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const StatusesSchema = new Schema({
    id: int,
    name: String
});


// Compile model from schema
const StatusesModel = mongoose.model("students", StatusesSchema);

export default StatusesModel;