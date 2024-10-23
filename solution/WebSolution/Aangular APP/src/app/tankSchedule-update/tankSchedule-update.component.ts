import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {TankSchedule} from '../objects/tankSchedule';
import { TankScheduleService } from '../services/tankScheduleService';

 @Component({
  selector: 'tankSchedule-update',
  templateUrl: './tankSchedule-update.component.html',
  styleUrls: ['./tankSchedule-update.component.css']
})

export class TankScheduleUpdateComponent implements OnInit {
  
  id: number;
  submitted = false;
  tankschedule:TankSchedule;
public tankschedules_error:boolean=false;

  constructor(public route: ActivatedRoute, public svc: TankScheduleService,
                public location: Location) {

                
                this.tankschedule= new  TankSchedule(98,2018,3,23,4,55,"Tank B",1200,4,3);
               route.params.subscribe(params => { this.id = params['tankscheduleId']; });
    }

    ngOnInit(): void {
    this.svc.search(this.id).subscribe(
                                      data=>{this.tankschedule=data},
                                      err=>{this.tankschedules_error=true;}
                                    )             
    }
  
  submit(form)  {
            this.svc.update(this.tankschedule);
            this.location.back();
  }

  back(): void {
      this.location.back();
  } 
}