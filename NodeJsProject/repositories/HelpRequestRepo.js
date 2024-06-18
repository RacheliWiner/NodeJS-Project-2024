//import connect from '../../config/DB.js';
import model from '../models/HelpRequestModel.js';
//import myPipeline from '../repositories/myPipeline.js';
import connect from './db.js';


class HelpRequestRepo {

    constructor(model) {
        this.model = model;
        connect();
    }
    async getAll() {
        try {
            const helpRequests = await HelpRequest.find({});
            return helpRequests;
        } catch (error) {
            throw new Error('Error fetching help requests');
        }
    }

    async getById(id) {
        try {
            let item = await this.model.findById(Number(id));
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
    async update(id, item) {
      try{
        let result = await this.model.findByIdAndUpdate(Number(id), item);
        return result;
        }
        catch (errors) {
          throw new Error('it is not possible to update, please try again');
        }
      }

      
        
    }



export default new HelpRequestRepo(model);