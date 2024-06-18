import BaseService from "./BaseService.js";
import repo from '../repositories/HelpRequestRepo.js';

class HelpRequestService extends BaseService {
    constructor(repo){
        super(repo);
    }
    async update(id, data){
        return await this.repo.update(id, data);
    }
}
export default new HelpRequestService(repo);