import BaseService from "./baseService";
import VolunteerRepo from "../repositories/VolunteerRepo";

class VolunteerService extends BaseService{
    constructor(VolunteerRepo){
        super(VolunteerRepo);
    }

    async insert(data){
        try {
            return await this.RequestRepo.insert(data);
        }
        catch (errors) {
            console.log(errors);
            throw new Error("error while trying to insert a new volunteer");
        }
    }
}

