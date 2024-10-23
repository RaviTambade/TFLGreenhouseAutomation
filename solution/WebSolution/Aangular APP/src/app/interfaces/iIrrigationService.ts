
import {Irrigation} from '../objects/irrigation';


export interface IIrrigationService {
  getIrrigationList():Irrigation[] ;
  getIrrigation(id:number):Irrigation;
}
