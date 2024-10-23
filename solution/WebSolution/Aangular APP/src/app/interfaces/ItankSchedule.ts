
import {TankSchedule} from '../objects/tankSchedule';


export interface ITankScheduleService {
  getAllTankSchedule():TankSchedule[] ;
  getTankSchedule(id:number):TankSchedule;
}