// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const StreetsSchema = new Schema({
    id: int,
    name: String
});


// Compile model from schema
const StreetsModel = mongoose.model("streets", StreetsSchema);

export default StreetsModel;