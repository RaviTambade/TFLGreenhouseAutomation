import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Tank } from '../objects/tank';
 

 
@Injectable()
export class TankService {
   
  data:any;
  loading:boolean;
   
  constructor(public http: Http) {
  }

  getAll(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/tank')
                .map((res:Response)=> res.json());
  }

  search(id:number) { 
    
        return this.http.get('http://localhost:7000/api/tank/' + id)
               .map((res:Response)=> res.json()); 
  }

insert(tank:Tank):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/tank/',tank)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(tank:Tank): void {
     
    this.http.put('http://localhost:7000/api/tank/' +tank.tankId,tank)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/tank/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }                                
}