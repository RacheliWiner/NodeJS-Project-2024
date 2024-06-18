import BaseService from "./baseService.js";
import RequestRepo from "../repositories/HelpRequestRepo.js"

class HelpRequestService extends BaseService {
    constructor(RequestRepo) {
        super(RequestRepo);
    }

    async getAll(query) {
        //return this.repo.get();
        try {
          const response = await this.service.getList(req.query);
          return res.status(response.statusCode).json(response);
        }
        catch (e) {
          next(e);
        }
      }
    
      async getById(id) {
        return this.repo.getById();
        // const { id } = req.params;
        // try {
        //   const response = await this.service.getById(id);
        //   return res.status(response.statusCode).json(response);
        // }
        // catch (e) {
        //   next(e);
        // }
      }
    
      async insert(data) {
        // try {
        //   const response = await this.service.insert(req.body);
        //   return res.status(response.statusCode).json(response);
        // }
        // catch (e) {
        //   next(e);
        // }
      }
    

    async update(id, data) {
        try {
            return await this.RequestRepo.update(id, data);
        }
        catch (errors) {
            console.log(errors);
            throw new Error("error while trying to update help request");
        }
    }

}

export default new HelpRequestService(RequestRepo);