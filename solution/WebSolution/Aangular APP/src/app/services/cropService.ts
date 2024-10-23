import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Crop } from '../objects/crop';
import { ICropService } from '../interfaces/iCropService';


@Injectable()
export class CropService{
   data:any;
  loading:boolean;
   
  constructor(public http: Http) {
  }

  getcrops(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/crops')
                .map((res:Response)=> res.json());
  }

  search(id:number) { 
    
        return this.http.get('http://localhost:7000/api/crops/' + id)
               .map((res:Response)=> res.json()); 
  }

insert(crop:Crop):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/crops/',crop)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(crop:Crop): void {
     
    this.http.put('http://localhost:7000/api/crops/' +crop.cropId,crop)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/crops/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }              
}
