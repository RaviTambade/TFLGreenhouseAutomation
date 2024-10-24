
import {Disease} from '../objects/disease';

export interface IDiseaseService {
  getAllDisease():Disease[] ;
  getDisease(id:number):Disease;

}
