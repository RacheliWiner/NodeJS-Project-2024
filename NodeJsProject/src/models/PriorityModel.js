// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const PrioritiesSchema = new Schema({
    id: Number,
    name: String
});


// Compile model from schema
const PrioritiesModel = mongoose.model('priorities', PrioritiesSchema);

export default PrioritiesModel;