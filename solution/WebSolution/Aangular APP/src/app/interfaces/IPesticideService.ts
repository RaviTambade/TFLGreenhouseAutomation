
import {Pesticide} from '../objects/pesticide';

export interface IPesticideService {
  getAllPesticides():Pesticide[] ;
  getPesticide(id:number):Pesticide;
}
