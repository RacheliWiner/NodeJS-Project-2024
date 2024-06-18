// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    id: int,
    cityCode: int,
    steetCode: int,
    numberCode: int
});


// Compile model from schema
const LocationsModel = mongoose.model("locations", LocationSchema);

export default LocationsModel;