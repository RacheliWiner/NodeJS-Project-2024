import connect from '../../config/db.js';
import model from '../models/HelpRequestModel.js';

class HelpRequestRepo {

  constructor(model) {
    this.model = model;
    connect();
  }

  async getAll(filters = {}) {
    try {
      const ourPipeline = [
        {
          '$lookup': {
            'from': 'Location',
            'localField': 'Location',
            'foreignField': '_id',
            'as': 'location_info'
          }
        }, {
          '$unwind': {
            'path': '$location_info'
          }
        }, {
          '$lookup': {
            'from': 'Cities',
            'localField': 'location_info.cityCode',
            'foreignField': '_id',
            'as': 'location_info.city_info'
          }
        }, {
          '$unwind': {
            'path': '$location_info.city_info'
          }
        }, {
          '$lookup': {
            'from': 'Streets',
            'localField': 'location_info.streetCode',
            'foreignField': '_id',
            'as': 'location_info.street_info'
          }
        }, {
          '$unwind': {
            'path': '$location_info.street_info'
          }
        }, {
          '$lookup': {
            'from': 'Statuses',
            'localField': 'statusCode',
            'foreignField': '_id',
            'as': 'status_info'
          }
        }, {
          '$unwind': {
            'path': '$status_info'
          }
        }, {
          '$lookup': {
            'from': 'Priorities',
            'localField': 'priorityCode',
            'foreignField': '_id',
            'as': 'priority_info'
          }
        }, {
          '$unwind': {
            'path': '$priority_info'
          }
        }, {
          '$addFields': {
            'city': '$location_info.city_info.name',
            'street': '$location_info.street_info.name',
            'number': '$location_info.numberCode',
            'priority': '$priority_info.name',
            'status': '$status_info.name'
          }
        }, {
          '$project': {
            '_id':0,
            'Location': 0,
            'location_info': 0,
            'volunteerCode':0,
            'status_info': 0,
            'priority_info': 0
          }
        }
      ]
      let query = {};
      if (filters.locationCode) {
        query.locationCode = parseInt(filters.locationCode);
      }
      if (filters.statusCode) {
        query.statusCode = filters.statusCode;
      }
      if (filters.priorityCode) {
        query.priorityCode = filters.priorityCode;
      }
      console.log(query);
      if (Object.keys(query).length > 0) {
        ourPipeline.unshift({ $match: query });
      } else {
        ourPipeline.push({ $match: { status: "waiting" } }, { $match: query });

      }
      const results = await this.model.aggregate(ourPipeline).exec();

      console.log(results);
      return results;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  async get(id) {
    try {
        let item = await this.model.findById(id)
        console.log(item);

        if (!item) {
            let error = new Error('Item not found');
            error.statusCode = 404;
            throw error;
        }

        return item;
    } catch (errors) {
        throw errors;
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