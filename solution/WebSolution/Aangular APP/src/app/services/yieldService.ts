import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Yield } from '../objects/yield';
 

 
@Injectable()
export class YieldService {
   
  data:any;
  loading:boolean;
   
  constructor(public http: Http) {
  }

  getAll(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/yields')
                .map((res:Response)=> res.json());
  }

  search(id:number) { 
    
        return this.http.get('http://localhost:7000/api/yields/' + id)
               .map((res:Response)=> res.json()); 
  }

insert(yld:Yield):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/yields/',yld)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(yld:Yield): void {
     
    this.http.put('http://localhost:7000/api/yields/' +yld.yieldId,yld)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/yields/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }                                
}