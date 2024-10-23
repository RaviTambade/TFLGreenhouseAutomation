import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { Irrigation } from '../objects/irrigation';
import { IrrigationService } from '../services/irrigationService';

@Component({
  selector: 'app-irrigation-delete',
  templateUrl: './irrigation-delete.component.html',
  styleUrls: ['./irrigation-delete.component.css']
})
export class IrrigationDeleteComponent implements OnInit {

  id:number;
submitted = false;
irrigation:Irrigation;
public irrigation_error:boolean=false;

  constructor(public router:Router,public route:ActivatedRoute,private svc: IrrigationService) { 
       
              this.irrigation= new Irrigation(1,"Pathar",230,"Pump is Off",12,3,44,4,"Tank A is Full","Tank B is full");
route.params.subscribe(params=>{this.id=params['id'];});

  }
          
  ngOnInit() {
     this.svc.getIrrigation(this.id).subscribe(
           data=>{this.irrigation=data},
           err=>{this.irrigation_error=true;}
     )
  }


  onSubmit(form)  {
            this.svc.update(this.irrigation);
           this.router.navigate(['products']);
  }

  back(): void {
    this.router.navigate(['products']);
  } 


 
  yes(): void {
            //    this.svc.delete(this.irrigation.irrigationId);
              this.router.navigate(['irrigation']);
  }
  
  no(): void {
               this.router.navigate(['irrigation']);
  }


}
