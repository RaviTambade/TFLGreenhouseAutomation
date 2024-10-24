import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {TankSchedule} from '../objects/tankSchedule';
import { TankScheduleService } from '../services/tankScheduleService';


@Component({
  selector: 'tankSchedule-details',
  templateUrl: './tankSchedule-details.component.html',
  styleUrls: ['./tankSchedule-details.component.css']
})

export class TankScheduleDetailsComponent implements OnInit {
 
 tankschedule:TankSchedule;
  id:number;
  tankschedule_error:boolean;
   constructor(private route:ActivatedRoute, private svc:TankScheduleService,
              private location:Location){
     this.tankschedule= new  TankSchedule(98,2018,3,23,4,55,"Tank B",1200,4,3);
   
    route.params.subscribe(params => { this.id = params['tankscheduleId']; });
    console.log(this.id);
   }
          
  ngOnInit():void {
   this.svc.search(this.id).subscribe(
     data=>{this.tankschedule=data},
     err=>{this.tankschedule_error=true;})
  }




}