import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {RequiredClimate} from '../objects/requiredClimate';
import {RequiredClimateService} from '../services/requiredClimateService'

 @Component({
     selector: 'requiredClimate-list',
     templateUrl: './requiredClimate.component.html',
     styleUrls:['./requiredClimate.component.css']
 })
export class RequiredClimateComponent implements OnInit{
    requiredClimates:RequiredClimate[];
  constructor(private svc: RequiredClimateService) { 
        const injector: any = ReflectiveInjector.resolveAndCreate([RequiredClimateService]);
        this.svc = injector.get(RequiredClimateService);
  }
  ngOnInit() {
     this.requiredClimates= this.svc.getAllRequiredClimates();
      
  }

}


 