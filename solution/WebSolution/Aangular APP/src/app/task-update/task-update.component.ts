import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {Task} from '../objects/task';
import {TaskService} from '../services/taskService';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

  id: number;
  submitted = false;
  task:Task;
public tasks_error:boolean=false;

  constructor(public route: ActivatedRoute, public svc: TaskService,
                public location: Location) {

                
        this.task= new  Task(131,"title","description","category",10,4,2017,3,1,10,"completed","Rahul","Omkar");
               route.params.subscribe(params => { this.id = params['taskId']; });
    }

    ngOnInit(): void {
    this.svc.search(this.id).subscribe(
                                      data=>{this.task=data},
                                      err=>{this.tasks_error=true;}
                                    )             
    }
  
  submit(form)  {
            this.svc.update(this.task);
            this.location.back();
  }

  back(): void {
      this.location.back();
  }
}