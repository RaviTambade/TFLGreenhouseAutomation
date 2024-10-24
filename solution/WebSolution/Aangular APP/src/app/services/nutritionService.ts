import {Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
 
import { IDiseaseService } from '../interfaces/iDiseaseService';
import { Nutrition } from '../objects/nutrition';
 


@Injectable()
export class NutritionService  {
 data:any;
  loading:boolean;
   
  constructor(public http: Http) {
  }

  getNutritions(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/nutritions')
                .map((res:Response)=> res.json());
  }

  search(id:number) { 
    
        return this.http.get('http://localhost:7000/api/nutritions/' + id)
               .map((res:Response)=> res.json()); 
  }

insert(nutrition:Nutrition):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/nutritions/',nutrition)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(nutrition:Nutrition): void {
     
    this.http.put('http://localhost:7000/api/nutritions/' +nutrition.nutritionId,nutrition)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/nutritions/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }            
  
}
