import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {TankSchedule} from '../objects/tankSchedule';
import { TankScheduleService } from '../services/tankScheduleService';

@Component({
  selector: 'app-tank-schedule-delete',
  templateUrl: './tank-schedule-delete.component.html',
  styleUrls: ['./tank-schedule-delete.component.css']
})
export class TankScheduleDeleteComponent implements OnInit {
tankschedule:TankSchedule;
  id:number;
  tankschedule_error:boolean;
 constructor(private route:ActivatedRoute, private svc:TankScheduleService,
              private location:Location){
     this.tankschedule= new  TankSchedule(98,2018,3,23,4,55,"Tank B",1200,4,3);
   
    route.params.subscribe(params => { this.id = params['tankscheduleId']; });
   }

   ngOnInit():void {
              this.svc.search(this.id).subscribe(
                                                data=>{this.tankschedule=data},
                                                err=>{this.tankschedule_error=true;})     
  }
   
  yes(): void {
                this.svc.delete(this.tankschedule.tankscheduleId);
                this.location.back();
  }
  
  no(): void {
                this.location.back();
  }

}
