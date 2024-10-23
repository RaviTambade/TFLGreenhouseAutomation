import {Injectable} from '@angular/core';
import {RequiredClimate} from '../objects/requiredClimate';
import {IRequiredClimateService} from '../interfaces/iRequiredClimate';

 
@Injectable()
export class RequiredClimateService implements IRequiredClimateService {
  constructor() { }

  getRequiredClimate(id:number):RequiredClimate
  {
    return new RequiredClimate(14,"Gerbera",10,10,10,10,10,10,10);
  }


getAllRequiredClimates():RequiredClimate[]
  {
  let  requiredClimates=[
     
    new RequiredClimate(14,"Gerbera",10,10,10,10,10,10,10),
    new RequiredClimate(14,"Gerbera",10,10,10,10,10,10,10),
    new RequiredClimate(14,"Gerbera",10,10,10,10,10,10,10),
    new RequiredClimate(14,"Gerbera",10,10,10,10,10,10,10),
    new RequiredClimate(14,"Gerbera",10,10,10,10,10,10,10)
      ];
    return requiredClimates;
   }
}
