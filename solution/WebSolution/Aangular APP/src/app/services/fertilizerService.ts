import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Fertilizer } from '../objects/fertilizer';
import { IFertilizerService } from '../interfaces/ifertilizerService';


@Injectable()
export class FertilizerService {
  
data:any;
  loading:boolean;
   
  constructor(public http: Http) {
  }

  getfertilizers(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/fertilizers')
                .map((res:Response)=> res.json());
  }

  search(id:number) { 
    
        return this.http.get('http://localhost:7000/api/fertilizers/' + id)
               .map((res:Response)=> res.json()); 
  }

insert(fertilizer:Fertilizer):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/fertilizers/',fertilizer)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(fertilizer:Fertilizer): void {
     
    this.http.put('http://localhost:7000/api/fertilizers/' +fertilizer.FertilizerId,fertilizer)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/fertilizers/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }    

}