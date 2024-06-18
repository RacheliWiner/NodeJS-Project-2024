// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const StatusesSchema = new Schema({
    id: Number,
    name: String
});


// Compile model from schema
const StatusesModel = mongoose.model('statuses', StatusesSchema);

export default StatusesModel;