import BaseController from './BaseController.js';
import service from '../services/HelpRequestService.js';


class HelpRequestController extends BaseController {
        constructor(service) {
        super(service);
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
        async update(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.update(id, req.body);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}

export default new HelpRequestController(service);