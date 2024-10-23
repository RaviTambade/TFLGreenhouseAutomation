import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Irrigation } from '../objects/irrigation';
import { IIrrigationService } from '../interfaces/iIrrigationService';


@Injectable()
export class IrrigationService{
  data :any;
  loading:boolean;

  constructor(public http:Http) {

   }

getIrrigationList()
  {
    this.loading = true;
        return this.http.request('http://localhost:7000/api/irrigations')
                .map((res:Response)=> res.json());
   }

  getIrrigation(id:number)
  {
      return this.http.get('http://localhost:7000/api/irrigations/' + id)
               .map((res:Response)=> res.json()); 
  }

  insert(irrigation:Irrigation):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/irrigations/',irrigation)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(irrigation:Irrigation): void {
  
    this.http.put('http://localhost:7000/api/irrigations/' +irrigation.irrigationId,irrigation)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/irrigations/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }                 
 




}
