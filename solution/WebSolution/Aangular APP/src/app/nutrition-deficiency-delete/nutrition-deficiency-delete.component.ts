import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Nutrition } from '../objects/nutrition';
import {NutritionService} from '../services/nutritionService';

@Component({
  selector: 'app-nutrition-deficiency-delete',
  templateUrl: './nutrition-deficiency-delete.component.html',
  styleUrls: ['./nutrition-deficiency-delete.component.css']
})
export class NutritionDeficiencyDeleteComponent implements OnInit {

  
   id:number;
  nutrition:Nutrition;
 
  public nutrition_error:Boolean;
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
   
  yes(): void {
                this.svc.delete(this.nutrition.nutritionId);
                this.location.back();
  }
  
  no(): void {
                this.location.back();
  }

}
