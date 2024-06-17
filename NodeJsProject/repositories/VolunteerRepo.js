//const BaseRepo = require('./BaseRepo');
// import VolunteersModel from "../models/volunteersModel";
import VolunteerModel from "../models/VolunteerModel.js";
import BaseRepo from "./BaseRepo.js";

class VolunteerRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}

//module.exports = new StudentRepo();
export default new VolunteerRepo(VolunteerModel);