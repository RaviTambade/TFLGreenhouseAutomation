
import {Fertilizer} from '../objects/fertilizer';


export interface IFertilizerService {
  getAllFertilizers():Fertilizer[] ;
  getFertilizer(id:number):Fertilizer;
 }
