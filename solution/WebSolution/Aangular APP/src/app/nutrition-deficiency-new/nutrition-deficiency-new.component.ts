import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Nutrition} from '../objects/nutrition';
import {NutritionService} from '../services/nutritionService';

@Component({
  selector: 'app-nutrition-deficiency-new',
  templateUrl: './nutrition-deficiency-new.component.html',
  styleUrls: ['./nutrition-deficiency-new.component.css']
})
export class NutritionDeficiencyNewComponent{

    value: Nutrition;
   
  constructor(public route: ActivatedRoute, public svc: NutritionService,
              public location: Location) {
  } 

  ngOnInit(): void { }

  onSubmit(form) {
      this.value = form; 
      this.svc.insert(this.value);
      this.location.back();
  }

  back(): void {
      this.location.back();
  }
 
}