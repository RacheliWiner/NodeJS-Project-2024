// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    id: Number,
    cityCode: Number,
    steetCode: Number,
    numberCode: Number
});


// Compile model from schema
const LocationsModel = mongoose.model('locations', LocationSchema);

export default LocationsModel;