// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const HelpRequestsSchema = new Schema({
    id: int,
    description: String,
    locationCode: int,
    phone: String,
    NumberOfPortions: int,
    statusCode: int,
    priorityCode: int,
    volunteerCode: int
});


// Compile model from schema
const HelpRequestsModel = mongoose.model("students", HelpRequestsSchema);

export default HelpRequestsModel;