import BaseService from "./baseService.js";
import RequestRepo from "../repositories/HelpRequestRepo.js"

class HelpRequestService extends BaseService {
    constructor(RequestRepo) {
        super(RequestRepo);
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

export default HelpRequestService;