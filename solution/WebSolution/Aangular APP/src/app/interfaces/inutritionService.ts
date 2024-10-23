
import {Nutrition} from '../objects/nutrition';

export interface INutritionService {
  getAllNutrition():Nutrition[] ;
  getNutrition(id:number):Nutrition;
}
