import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {Task} from '../objects/task';
import {TaskService} from '../services/taskService';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

   public tasks_error:boolean=false;
  tasks:Task[];
 query:string;
  constructor( private router:Router,private svc:TaskService,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
          
  ngOnInit() {
        console.log('In Task Component');
     this.svc.gettasks().subscribe(
       data=>{this.tasks=data},
       err=>{this.tasks_error=true;}
      
     )}
  }

 
