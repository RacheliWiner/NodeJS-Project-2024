import BaseController from "./BaseController";
import VolunteerService from "../repositories/VolunteerRepo";

class volunteerController extends BaseController{
    constructor(VolunteerService){
        super(VolunteerService);
    }

    async insert(req, res, next) {
        try {
            const response = await this.service.insert(req.body);
            return res.status(response.statusCode).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
export default new volunteerController;