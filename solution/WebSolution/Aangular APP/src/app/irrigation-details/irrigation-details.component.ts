import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import{Observable} from 'rxjs/Observable'
import 'rxjs/Rx';


import {Irrigation} from '../objects/irrigation';
import {IrrigationService} from '../services/irrigationService';

@Component({
  selector: 'app-irrigation-details',
  templateUrl: './irrigation-details.component.html',
  styleUrls: ['./irrigation-details.component.css']
})
export class IrrigationDetailsComponent implements OnInit {
 irrigationId:number;

  irrigation:Irrigation;
  public irrigation_error:boolean=false;

  constructor(private route:ActivatedRoute,private location:Location,private svc: IrrigationService) { 
    route.params.subscribe(params => { this.irrigationId = params['id']; });
      console.log(this.irrigationId);
      this.irrigation= new Irrigation(1,"Pathar",230,"Pump is Off",12,3,44,4,"Tank A is Full","Tank B is full");


  }     
  
  

      
  ngOnInit() {
   this.svc.getIrrigation(this.irrigationId).subscribe(
     data=>{
     let plantatinoDate:Date=new Date(2017, 4, 10);
     this.irrigation=data;
    // this.irrigation.startTime=plantatinoDate;
     //this.irrigation.startTime.setDate(plantatinoDate.getDate() + data.day);


     },
     err=>{this.irrigation_error=true;}
   )
  }
}