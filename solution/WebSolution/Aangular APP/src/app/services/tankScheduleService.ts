import { Injectable } from '@angular/core';
import {TankSchedule} from '../objects/tankSchedule';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
 


@Injectable()
export class TankScheduleService  {
     
  data:any;
  loading:boolean;
   
  constructor(public http: Http) {
  }

  getAll(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/tankschedule')
                .map((res:Response)=> res.json());
  }

  search(id:number) { 
    
        return this.http.get('http://localhost:7000/api/tankschedule/' + id)
               .map((res:Response)=> res.json()); 
  }

insert(tankschedule:TankSchedule):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/tankschedule/',tankschedule)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(tankschedule:TankSchedule): void {
     
    this.http.put('http://localhost:7000/api/tankschedule/' +tankschedule.tankscheduleId,tankschedule)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/tankschedule/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }        
}
