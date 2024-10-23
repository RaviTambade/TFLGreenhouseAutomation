import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Ingredient} from '../objects/ingredient';
 

@Injectable()
export class IngredientService {
   data:any;
  loading:boolean;
   
  constructor(public http: Http) {
  }

  getAll(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/ingredients')
                .map((res:Response)=> res.json());
  }

  search(id:number) { 
    
        return this.http.get('http://localhost:7000/api/ingredients/' + id)
               .map((res:Response)=> res.json()); 
  }

insert(ingredient:Ingredient):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/ingredients/',ingredient)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(ingredient:Ingredient): void {
      
    this.http.put('http://localhost:7000/api/ingredients/' +ingredient.ingredientsID,ingredient)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/ingredients/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }              
}
