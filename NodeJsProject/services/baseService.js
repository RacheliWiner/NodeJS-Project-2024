class BaseService {
    constructor(repo) {
        this.repo = repo;
    }

    async get() {
        return this.repo.getAll();
        // try {
        //   const response = await this.service.getList(req.query);
        //   return res.status(response.statusCode).json(response);
        // }
        // catch (e) {
        //   next(e);
        // }
      }
    
      async getById(id) {
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
        // const { id } = req.params;
        // try {
        //   const response = await this.service.update(id, req.body);
        //   return res.status(response.statusCode).json(response);
        // }
        // catch (e) {
        //   next(e);
        // }
      }
    
      async delete(id) {
        // const { id } = req.params;
        // try {
        //   const response = await this.service.delete(id);
        //   return res.status(response.statusCode).json(response);
        // }
        // catch (e) {
        //   next(e);
        // }
      }

}

//module.exports = BaseService;
export default BaseService;