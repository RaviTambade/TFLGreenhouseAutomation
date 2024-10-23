import { Injectable } from '@angular/core';

import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { Greenhouse } from '../objects/greenhouse';
import { IGreenhouseService } from '../interfaces/IGreenhouseService';



@Injectable()
export class GreenhouseService {
   
  data:any;
  loading:boolean;
   
  constructor(public http: Http) {
  }

  getAllGreenhouses(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/greenhouse')
                .map((res:Response)=> res.json());
  }

  search(id:number) { 
    
        return this.http.get('http://localhost:7000/api/greenhouse/' + id)
               .map((res:Response)=> res.json()); 
  }

insert(greenhouse:Greenhouse):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/greenhouse/',greenhouse)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(greenhouse:Greenhouse): void {
     
    this.http.put('http://localhost:7000/api/greenhouse/' +greenhouse.greenhouseId,greenhouse)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/greenhouse/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }                                
}