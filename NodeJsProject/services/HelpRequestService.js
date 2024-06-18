import BaseService from "./baseService";
import RequestRepo from "../repositories/HelpRequestRepo"

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