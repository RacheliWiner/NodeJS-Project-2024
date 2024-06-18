import BaseController from "./BaseController";
import HelpRequestService from "../services/HelpRequestService"

class HelpRequestController extends BaseController{
    constructor(HelpRequestService){
        super(HelpRequestService);
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

export default new HelpRequestController(HelpRequestService);