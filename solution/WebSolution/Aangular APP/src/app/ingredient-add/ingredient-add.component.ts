import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Ingredient} from '../objects/ingredient';
import {IngredientService} from '../services/ingredientService';
@Component({
  selector: 'ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})
export class IngredientAddComponent {

     value: Ingredient;
   
  constructor(public route: ActivatedRoute, public svc: IngredientService,
              public location: Location) {
  } 

  ngOnInit(): void { }

  submit(form) {
      this.value = form; 
      console.log('About to Insert the values in DB'+" " + this.value.solutionName + " " + this.value.fertilizerName);
     this.svc.insert(this.value);
      this.location.back();
  }

  back(): void {
      this.location.back();
  }

}
