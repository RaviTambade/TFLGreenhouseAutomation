import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { Irrigation } from '../objects/irrigation';
import { IrrigationService } from '../services/irrigationService';

@Component({
  selector: 'app-irrigation-update',
  templateUrl: './irrigation-update.component.html',
  styleUrls: ['./irrigation-update.component.css']
})
export class IrrigationUpdateComponent implements OnInit {
id:number;
submitted = false;
irrigation:Irrigation;
public irrigation_error:boolean=false;

  constructor(public route:ActivatedRoute, public location:Location,private svc: IrrigationService) { 
       
              this.irrigation= new Irrigation(1,"Pathar",230,"Pump is Off",12,3,44,4,"Tank A is Full","Tank B is full");
route.params.subscribe(params=>{this.id=params['id'];});

  }
          
  ngOnInit() {
     this.svc.getIrrigation(this.id).subscribe(
           data=>{
             let plantatinoDate:Date=new Date(2017, 4, 10);
                this.irrigation=data;
                //this.irrigation.startTime=plantatinoDate;
                //this.irrigation.startTime.setDate(plantatinoDate.getDate() + data.day);
           },
           err=>{this.irrigation_error=true;}
     )
  }


  onSubmit(form)  {
            this.svc.update(this.irrigation);
            this.location.back();
  }

  back(): void {
      this.location.back();
  } 
}
