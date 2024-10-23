import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {RequiredClimate} from '../objects/requiredClimate';
import {RequiredClimateService} from '../services/requiredClimateService';

@Component({
  selector: 'pesticide-update',
  templateUrl: './requiredClimate-Update.component.html',
  styleUrls: ['./requiredClimate-Update.component.css']
})

export class RequiredClimateUpdateComponent implements OnInit {
submitted = false;

  requiredClimate:RequiredClimate;
  constructor(private svc: RequiredClimateService) { 
        const injector: any = ReflectiveInjector.resolveAndCreate([RequiredClimateService]);
        this.svc = injector.get(RequiredClimateService);
  }
          
  ngOnInit() {
     this.requiredClimate= this.svc.getRequiredClimate(12);
  }


  onSubmit(form: any): void {
          this.submitted=true;
           
    }

    showCustomer(form:any){
          return form && form.controls['Name'] &&
           form.controls['Name'].value;
    }

    showFormControls(form:any){
        return form && form.controls['Name'] 
        && form.controls['Name'].value;
    }
}   