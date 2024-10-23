import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Pesticide } from '../objects/pesticide';
import { IPesticideService } from '../interfaces/IPesticideService';


@Injectable()
export class PesticideService  {
     
  data:any;
  loading:boolean;
   
  constructor(public http: Http) {
  }

  getAllpesticides(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/pesticides')
                .map((res:Response)=> res.json());
  }

  search(id:number) { 
    
        return this.http.get('http://localhost:7000/api/pesticides/' + id)
               .map((res:Response)=> res.json()); 
  }

insert(pesticide:Pesticide):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/pesticides/',pesticide)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(pesticide:Pesticide): void {
     
    this.http.put('http://localhost:7000/api/pesticides/' +pesticide.pesticideID,pesticide)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/pesticides/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }        
}
