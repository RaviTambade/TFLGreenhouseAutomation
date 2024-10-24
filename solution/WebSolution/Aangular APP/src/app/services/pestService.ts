import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

//import { IPestService } from '../interfaces/ipestservice';
import { Pest } from '../objects/pest';

@Injectable()
export class PestService /*implements IPestService */
{
  data:any;
  loading:boolean;
  constructor(public http:Http) { }

  getPest(id:number):Pest
  {
    return new Pest(1,"Aphids","Aphids are tiny,soft body insects that feed on the underside of the broccoli leves","Symptoms","remedy");
  }



  getAllPests(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/pests')
                .map((res:Response)=> res.json());
  }

   search(pestId:number) { 
        console.log("Pest Id is" +pestId);
        return this.http.get('http://localhost:7000/api/pests/' + pestId)
               .map((res:Response)=> res.json()); 
  }
  insert(pest:Pest):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/pests/' ,pest)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }
  update(pest:Pest): void {
     
    this.http.put('http://localhost:7000/api/pests/' +pest.pestId,pest)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
   delete(pestId:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/pests/' + pestId)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }   
    
}





