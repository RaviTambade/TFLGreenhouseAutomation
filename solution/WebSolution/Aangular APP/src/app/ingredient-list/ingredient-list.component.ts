import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Ingredient} from '../objects/ingredient';
import {IngredientService} from '../services/ingredientService';

@Component({
  selector: 'ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

   public ingredient_error:boolean=false;
  ingredients:Ingredient[];
 query:string;
  constructor( private router:Router,private svc:IngredientService,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
          
  ngOnInit() {
        
     this.svc.getAll().subscribe(
       data=>{this.ingredients=data},
       err=>{this.ingredient_error=true;}
      
     )}


}
