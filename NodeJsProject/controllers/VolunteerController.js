import BaseController from "./BaseController";
import VolunteerService from "../repositories/VolunteerRepo";

class volunteerController extends BaseController{
    constructor(VolunteerService){
        super(VolunteerService);
    }
    
}