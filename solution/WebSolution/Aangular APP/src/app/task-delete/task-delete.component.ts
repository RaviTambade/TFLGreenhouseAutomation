import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Task} from '../objects/task';
import {TaskService} from '../services/taskService';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

     id:number;
  task:Task;
 
  public task_error:Boolean;
 constructor(private route:ActivatedRoute, private svc:TaskService,
              private location:Location){
                  this.task= new  Task(131,"title","description","category",10,4,2017,3,1,10,"completed","Rahul","Omkar");
   
    route.params.subscribe(params => { this.id = params['taskId']; });
    console.log(this.id);
   }

   ngOnInit():void {
              this.svc.search(this.id).subscribe(
                                                data=>{this.task=data},
                                                err=>{this.task_error=true;})     
  }
   
  yes(): void {
                this.svc.delete(this.task.taskId);
                this.location.back();
  }
  
  no(): void {
                this.location.back();
  }
}
