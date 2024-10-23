
import {Ingredient} from '../objects/ingredient';

export interface IIngredientService {
  getAllIngredients():Ingredient[] ;
  getIngredient(id:number):Ingredient;
}
