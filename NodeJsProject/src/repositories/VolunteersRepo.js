import connect from '../../config/db.js';
import model from '../models/VolunteerModel.js';

class VolunteersRepo {
    constructor(model) {
        this.model = model;
        connect();

    }
    async getAll() {
        return this.model.find({}).exec();
    }
    async getById(id) {
        try {
            let item = await this.model.findById(id);
            if (!item) {
                let error = new Error('There is no data for this request');
                error.code = 404;
                throw error;
            }
            return item;
        }
        catch (errors) {
            throw (errors);
        }
    }
    async add(item) {
        try {
            let vol = await this.model.create(item);
            console.log(vol);
            return vol;
        }
        catch (errors) {
            throw (errors);
        }
    }
}
export default new VolunteersRepo(model);