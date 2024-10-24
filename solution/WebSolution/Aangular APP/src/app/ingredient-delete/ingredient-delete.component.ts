import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Ingredient} from '../objects/ingredient';
import {IngredientService} from '../services/ingredientService';

@Component({
  selector: 'app-ingredient-delete',
  templateUrl: './ingredient-delete.component.html',
  styleUrls: ['./ingredient-delete.component.css']
})
export class IngredientDeleteComponent implements OnInit {

   id:number;
  ingredient:Ingredient;
 
  public ingredients_error:Boolean;
 constructor(private route:ActivatedRoute, private svc:IngredientService,
              private location:Location){
   this.ingredient= new  Ingredient(123,"name","discription",20);
   
    route.params.subscribe(params => { this.id = params['ingredientsID']; });
    console.log(this.id);
   }

   ngOnInit():void {
              this.svc.search(this.id).subscribe(
                                                data=>{this.ingredient=data},
                                                err=>{this.ingredients_error=true;})     
  }
   
  yes(): void {
                this.svc.delete(this.ingredient.ingredientsID);
                this.location.back();
  }
  
  no(): void {
                this.location.back();
  }

}
