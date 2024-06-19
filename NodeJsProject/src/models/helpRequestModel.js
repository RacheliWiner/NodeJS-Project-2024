import mongoose from "mongoose";
const Schema = mongoose.Schema;

const helpRequestSchema = new Schema({
    id: Number,
    description: String,
    locationCode: Number,
    phone: String,
    NumberOfPortions: Number,
    statusCode: Number,
    priorityCode: Number,
    volunteerCode: Number
});
const helpRequestModel = mongoose.model('helpReques', helpRequestSchema,'HelpRequests');
export default helpRequestModel;