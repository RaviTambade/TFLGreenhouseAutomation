
import {Pest} from '../objects/pest';

export interface IPestService {
  getPest(id:number):Pest;
  getAllPest():Pest[];

  
 
}
