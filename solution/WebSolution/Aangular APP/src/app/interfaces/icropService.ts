
import {Crop} from '../objects/crop';


export interface ICropService {
  getAllCrops():Crop[] ;
  getCrop(id:number):Crop;
}
