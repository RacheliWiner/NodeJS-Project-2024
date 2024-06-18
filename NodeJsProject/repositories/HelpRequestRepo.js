//const BaseRepo = require('./BaseRepo');
// import VolunteersModel from "../models/volunteersModel";
import connect from "./db.js";
import BaseRepo from "./BaseRepo.js";
import HelpRequestModel from "../models/helpRequestModel.js";

class HelpRequestRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}

//module.exports = new StudentRepo();
export default new HelpRequestRepo(HelpRequestModel);