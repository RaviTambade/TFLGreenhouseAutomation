import { Component, OnInit, ReflectiveInjector } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Nutrition} from '../objects/nutrition';
import {NutritionService} from '../services/nutritionService';




@Component({
  selector: 'app-nutrition-deficiency-details',
  templateUrl: './nutrition-deficiency-details.component.html',
  styleUrls: ['./nutrition-deficiency-details.component.css']
})
export class NutritionDeficiencyDetailsComponent implements OnInit {

  nutrition:Nutrition;
  id:number;
  nutrition_error:boolean;
   constructor(private route:ActivatedRoute, private svc:NutritionService,
              private location:Location){
     this.nutrition= new  Nutrition(123,"name","discription","symptoms","remedy","");
   
    route.params.subscribe(params => { this.id = params['nutritionId']; });
    console.log(this.id);
   }
          
  ngOnInit():void {
   this.svc.search(this.id).subscribe(
     data=>{this.nutrition=data},
     err=>{this.nutrition_error=true;})
  }


}







 