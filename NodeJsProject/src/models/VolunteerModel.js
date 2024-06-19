import mongoose from "mongoose";

const Schema = mongoose.Schema;
const VolunteersSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String
});

const VolunteersModel = mongoose.model('Volenteer', VolunteersSchema, 'Volunteers');
export default VolunteersModel;