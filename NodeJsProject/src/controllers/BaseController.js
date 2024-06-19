import autoBind from 'auto-bind';


class BaseController {
    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next) {
        try {
            const filters = req.query;
            const response = await this.service.getAll();
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
    async get(req, res, next) {
      
        try {
            const  id  = req.params._id;
            const response = await this.service.get(id);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }

}
export default BaseController;