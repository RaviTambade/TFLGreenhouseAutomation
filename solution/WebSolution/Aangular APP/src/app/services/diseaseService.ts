import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Disease } from '../objects/disease';
 

 
@Injectable()
export class DiseaseService {
   
  data:any;
  loading:boolean;
   
  constructor(public http: Http) {
  }

  getdiseases(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/diseases')
                .map((res:Response)=> res.json());
  }

  search(id:number) { 
    
        return this.http.get('http://localhost:7000/api/diseases/' + id)
               .map((res:Response)=> res.json()); 
  }

insert(disease:Disease):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/diseases/',disease)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(disease:Disease): void {
     
    this.http.put('http://localhost:7000/api/diseases/' +disease.diseaseId,disease)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/diseases/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }                                
}