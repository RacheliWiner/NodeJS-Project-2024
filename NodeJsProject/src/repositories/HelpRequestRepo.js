import connect from '../../config/db.js';
import model from '../models/HelpRequestModel.js';


class HelpRequestRepo {

  constructor(model) {
    this.model = model;
    connect();
  }




  async getAll(filters) {
    try {
      const ourPipeline = []
      // const ourPipeline = [
      //   {
      //     '$lookup': {
      //       'from': 'location',
      //       'localField': 'location',
      //       'foreignField': '_id',
      //       'as': 'location_info'
      //     }
      //   }, {
      //     '$lookup': {
      //       'from': 'status',
      //       'localField': 'status',
      //       'foreignField': '_id',
      //       'as': 'status_info'
      //     }
      //   }, {
      //     '$lookup': {
      //       'from': 'priority',
      //       'localField': 'importance',
      //       'foreignField': '_id',
      //       'as': 'priority_info'
      //     }
      //   }, {
      //     '$unwind': {
      //       'path': '$location_info'
      //     }
      //   }, {
      //     '$unwind': {
      //       'path': '$status_info'
      //     }
      //   }, {
      //     '$unwind': {
      //       'path': '$priority_info'
      //     }
      //   }, {
      //     '$addFields': {
      //       'city': '$location_info.city',
      //       'street': '$location_info.street',
      //       'importance': '$priority_info.description',
      //       'status': '$status_info.description'
      //     }
      //   }, {
      //     '$project': {
      //       'location': 0,
      //       'location_info': 0,
      //       'status_info': 0,
      //       'priority_info': 0
      //     }
      //   }
      // ]
      let query = {};
      // if (filters.location) {
      //   query.location = parseInt(filters.location);
      // }
      // if (filters.status) {
      //   query.status = filters.status;
      // }
      // if (filters.importance) {
      //   query.importance = filters.importance;
      // }
      // console.log(query);
      // if (Object.keys(query).length > 0) {
      //   ourPipeline.unshift({ $match: query });
      // } else {
      //   ourPipeline.push({ $match: { status: "waiting" } }, {$match: query });

      // }
      //const results = await this.model.aggregate(ourPipeline).exec();
      
      console.log(results);
      return results;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
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
    try {
      let result = await this.model.findByIdAndUpdate(Number(id), item);
      return result;
    }
    catch (errors) {
      throw new Error('it is not possible to update, please try again');
    }
  }



}



export default new HelpRequestRepo(model);