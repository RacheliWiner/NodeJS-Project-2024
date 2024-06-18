import BaseController from "./BaseController.js";
import HelpRequestService from "../services/HelpRequestService.js"

class HelpRequestController extends BaseController{
    constructor(HelpRequestService){
        super(HelpRequestService);
        this.update = this.update.bind(this);
        this.get = this.get.bind(this);
        this.getById = this.getById.bind(this);
    }

    async get(req, res, next) {
        try {
            const response = await this.service.get(req.query);
            // const response = await this.service.get(req);
            //to do  - status code accoring to result
            return res.status(200).json(response);
        }
        catch (e) {
            res.status(500).json({e:e.message});
            //next(e);
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.update(id, req.body);
            return res.status(response.statusCode).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}

const helpRequestController = new HelpRequestController(HelpRequestService);

export default helpRequestController;