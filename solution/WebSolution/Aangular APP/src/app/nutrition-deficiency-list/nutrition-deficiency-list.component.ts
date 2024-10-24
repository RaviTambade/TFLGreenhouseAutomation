import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Nutrition } from '../objects/nutrition';
import {NutritionService} from '../services/nutritionService';


@Component({
  selector: 'nutrition-deficiency-list',
  templateUrl: './nutrition-deficiency-list.component.html',
  styleUrls: ['./nutrition-deficiency-list.component.css']
})
export class NutritionDeficiencyListComponent implements OnInit {

   public nutrition_error:boolean=false;
  nutritions:Nutrition[];
 query:string;
  constructor( private router:Router,private svc:NutritionService,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
          
  ngOnInit() {
        
     this.svc.getNutritions().subscribe(
       data=>{this.nutritions=data},
       err=>{this.nutrition_error=true;}
      
     )}

} 





  
  