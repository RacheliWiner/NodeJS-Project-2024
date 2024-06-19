import BaseService from "./BaseService.js";
import repo from "../repositories/VolunteersRepo.js";

class VolunteersService extends BaseService {
    constructor(repo) {
        super(repo);
    }
    async add(data) {
        return await this.repo.add(data);
    }

}

export default new VolunteersService(repo);