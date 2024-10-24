import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Item } from '../objects/Item';

@Injectable()
export class StoreService {
  data:any;
  loading:boolean;
  constructor(public http:Http) { 

  }

   getAllItems()
  {  
     this.loading =true;
     return this.http.request('http://localhost:7000/api/store')
                .map((res:Response)=>res.json());
   }

   search(itemId:number){
     console.log("search service reached" + itemId);
     return this.http.get('http://localhost:7000/api/store/'+ itemId)
                .map((res:Response)=>res.json());
   }
   

   insert(item:Item):void {
     
     this.loading=true;
     this.http.post('http://localhost:7000/api/store',item)
              .subscribe((res:Response) =>{
                                              this.data=res.json();
                                              this.loading = false;
              });
            }
            
    update(item:Item):void {
      this.http.put('http://localhost:7000/api/store/'+item.itemId,item)
              .subscribe((res: Response) =>{
                                              this.data = res.json();
                                              this.loading = false;
              });
    }
    delete(itemId:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/store/' + itemId)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }           
   }




