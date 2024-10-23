import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Environment } from '../objects/environment';

@Injectable()
export class EnvironmentService {
  data:any;
  loading:boolean;
   
  constructor(public http: Http) {
  }

  getenvironments(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/environments')
                .map((res:Response)=> res.json());
  }

  search(id:number) { 
    
        return this.http.get('http://localhost:7000/api/environments/' + id)
               .map((res:Response)=> res.json()); 
  }

insert(environment:Environment):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/environments/',environment)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(environment:Environment): void {
     
    this.http.put('http://localhost:7000/api/environments/' +environment.climateId,environment)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/environments/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }                 
 


}
