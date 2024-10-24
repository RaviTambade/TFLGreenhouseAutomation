import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Solution } from '../objects/solution';


 
@Injectable()
export class SolutionService {
   
  data:any;
  loading:boolean;
   
  constructor(public http: Http) {
  }

  getsolution(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/solution')
                .map((res:Response)=> res.json());
  }

  search(id:number) { 
    
        return this.http.get('http://localhost:7000/api/solution/' + id)
               .map((res:Response)=> res.json()); 
  }

insert(solutions:Solution):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/solution/',Solution)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(solutions:Solution): void {
     
    this.http.put('http://localhost:7000/api/solution/' +solutions.solutionId,solutions)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/solution/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  } 
}                               