
import mongoose from "mongoose";


// Define a schema
const Schema = mongoose.Schema;

const helpRequestsSchema = new Schema({
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
const HelpRequestsModel = mongoose.model("helpRequests", helpRequestsSchema);

export default HelpRequestsModel;