import { Injectable } from '@angular/core';
import { ITaskService } from '../interfaces/itaskservice';
import { Task } from '../objects/task';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';




@Injectable()
export class TaskService {
   
  data:any;
  loading:boolean;
   
  constructor(public http: Http) {
  }

  gettasks(){
     
        this.loading = true;
        return this.http.request('http://localhost:7000/api/task')
                .map((res:Response)=> res.json());
  }

  search(id:number) { 
    
        return this.http.get('http://localhost:7000/api/task/' + id)
               .map((res:Response)=> res.json()); 
  }

insert(task:Task):void {
    this.loading = true;
    this.http.post('http://localhost:7000/api/task/',task)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                                             });
  }

   update(task:Task): void {
     
    this.http.put('http://localhost:7000/api/task/' +task.taskId,task)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
   }
 
   delete(id:number){
    this.loading = true;
    this.http.delete('http://localhost:7000/api/task/' + id)
              .subscribe((res: Response) => {
                                              this.data = res.json();
                                              this.loading = false;
                        });
  }                                
}