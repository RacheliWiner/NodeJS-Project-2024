// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const HelpRequestsSchema = new Schema({
    id: Number,
    description: String,
    locationCode: Number,
    phone: String,
    NumberOfPortions: Number,
    statusCode: Number,
    priorityCode: Number,
    volunteerCode: Number
});


// Compile model from schema
const HelpRequestsModel = mongoose.model("helpRequests", HelpRequestsSchema);

export default HelpRequestsModel;