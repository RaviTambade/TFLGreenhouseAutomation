import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Ingredient} from '../objects/ingredient';
import {IngredientService} from '../services/ingredientService';


@Component({
  selector: 'ingredient-update',
  templateUrl: './ingredient-update.component.html',
  styleUrls: ['./ingredient-update.component.css']
})

export class IngredientUpdateComponent implements OnInit {
 
  id: number;
  submitted = false;
  ingredient:Ingredient;
public ingredients_error:boolean=false;

  constructor(public route: ActivatedRoute, public svc: IngredientService,
                public location: Location) {

                
               this.ingredient= new  Ingredient(123,"name","discription",20);
               route.params.subscribe(params => { this.id = params['ingredientsID']; });
    }

    ngOnInit(): void {
    this.svc.search(this.id).subscribe(
                                      data=>{this.ingredient=data},
                                      err=>{this.ingredients_error=true;}
                                    )             
    }
  
  submit(form)  {
            this.svc.update(this.ingredient);
            this.location.back();
  }

  back(): void {
      this.location.back();
  } 
}