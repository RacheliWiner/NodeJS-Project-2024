import autoBind from "auto-bind";

class BaseController {
    constructor(service) {
        this.service = service;
        //autoBind(this);
    }

    async get(req, res, next) {
        try {
            // const response = await this.service.getAll(req.query);
            const response = await this.service.getAll(req);
            //to do  - status code accoring to result
            return res.status(200).json(response);
        }
        catch (e) {
            res.status(500).json({e:e.message});
            //next(e);
        }
    }

    async getById(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.getById(id);
            return res.status(response.statusCode).json(response);
        }
        catch (e) {
            next(e);
        }
    }

    
}

// module.exports = BaseController;

export default BaseController;