import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {TankSchedule} from '../objects/tankSchedule';
import { TankScheduleService } from '../services/tankScheduleService';
 
 

 @Component({
  selector: 'tankSchedule-add',
  templateUrl: './tankSchedule-add.component.html',
  styleUrls: ['./tankSchedule-add.component.css']
})
export class TankScheduleAddComponent {
 value: TankSchedule;
   
  constructor(public route: ActivatedRoute, public svc: TankScheduleService,
              public location: Location) {
  } 

  ngOnInit(): void { }

  submit(form) {
      this.value = form; 
      this.svc.insert(this.value);
      this.location.back();
  }

  back(): void {
      this.location.back();
  }
}
