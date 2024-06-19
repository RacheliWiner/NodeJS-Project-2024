class BaseService {

    constructor(repo) {
        this.repo = repo;
    }
    async getAll(filters) {
        return await this.repo.getAll(filters);
    }
    // async getAll(){
    //     return await this.repo.getAll();
    // }

    async get(id) {
        return this.repo.get(id);
      }

}

export default BaseService;