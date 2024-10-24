
import {Greenhouse} from '../objects/greenhouse';

export interface IGreenhouseService {
  getAllGreenhouses():Greenhouse[] ;
  getGreenhouse(id:number):Greenhouse;
}
