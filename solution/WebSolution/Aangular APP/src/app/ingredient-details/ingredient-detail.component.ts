import { Component, OnInit, ReflectiveInjector } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Ingredient} from '../objects/ingredient';
import {IngredientService} from '../services/ingredientService';


@Component({
  selector: 'ingredient-details',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.css']
})
export class IngredientDetailsComponent implements OnInit {

  
  ingredient:Ingredient;
  id:number;
  ingredient_error:boolean;
   constructor(private route:ActivatedRoute, private svc:IngredientService,
              private location:Location){
     this.ingredient= new  Ingredient(123,"name","discription",20);
   
    route.params.subscribe(params => { this.id = params['ingredientsID']; });
    console.log(this.id);
   }
          
  ngOnInit():void {
   this.svc.search(this.id).subscribe(
     data=>{this.ingredient=data},
     err=>{this.ingredient_error=true;})
  }
}
