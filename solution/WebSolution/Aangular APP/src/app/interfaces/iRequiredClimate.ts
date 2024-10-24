
import {RequiredClimate} from '../objects/requiredClimate';

export interface IRequiredClimateService{
    getAllRequiredClimates():RequiredClimate[];
    getRequiredClimate(id:number):RequiredClimate;
}
