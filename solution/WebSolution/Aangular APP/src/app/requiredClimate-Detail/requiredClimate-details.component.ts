import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {RequiredClimate} from '../objects/requiredClimate';
import {RequiredClimateService} from '../services/requiredClimateService';


@Component({
  selector: 'yield-details',
  templateUrl: './requiredClimate-details.component.html',
  styleUrls: ['./requiredClimate-details.component.css']
})
export class RequiredClimateDetailsComponent implements OnInit {

  requiredClimate:RequiredClimate;
  constructor(private svc: RequiredClimateService) { 
        const injector: any = ReflectiveInjector.resolveAndCreate([RequiredClimateService]);
        this.svc = injector.get(RequiredClimateService);
  }
          
  ngOnInit() {
     this.requiredClimate= this.svc.getRequiredClimate(12);
  }


}
