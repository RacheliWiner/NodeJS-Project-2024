import BaseController from "./BaseController.js";
import helpRequestService from "../services/HelpRequestService.js";
import autoBind from "auto-bind";

class HelpRequestController extends BaseController {
    constructor(service) {
        super(service); // קריאה לקונסטרקטור של המחלקה האב
        autoBind(this); // כדי לוודא שההקשר של `this` נשמר
    }

    async getAll(req, res, next) {
        try {
            const response = await this.service.get(req.query);
            return res.status(200).json(response);
        } catch (e) {
            res.status(500).json({ e: e.message });
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.update(id, req.body);
            return res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    }
}

const helpRequestController = new HelpRequestController(helpRequestService);
export default helpRequestController;