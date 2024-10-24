
import {Environment} from '../objects/environment';

export interface IEnvService {
  getCurrentEnvironment():Environment ;
  getEnvironment():Environment[];
}
