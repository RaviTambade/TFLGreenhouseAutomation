import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Nutrition} from '../objects/nutrition';
import {NutritionService} from '../services/nutritionService';

@Component({
  selector: 'nutrition-deficiency-update',
  templateUrl: './nutrition-deficiency-update.component.html',
  styleUrls: ['./nutrition-deficiency-update.component.css']
})
export class NutritionDeficiencyUpdateComponent implements OnInit {
id: number;
  submitted = false;
  nutrition:Nutrition;
public nutritions_error:boolean=false;

  constructor(public route: ActivatedRoute, public svc: NutritionService,
                public location: Location) {

                
                this.nutrition= new  Nutrition(123,"name","discription","symptoms","remedy","");
               route.params.subscribe(params => { this.id = params['nutritionId']; });
    }

    ngOnInit(): void {
    this.svc.search(this.id).subscribe(
                                      data=>{this.nutrition=data},
                                      err=>{this.nutritions_error=true;}
                                    )             
    }
  
  submit(form)  {
            this.svc.update(this.nutrition);
            this.location.back();
  }

  back(): void {
      this.location.back();
  } 
}



  
  