import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Irrigation} from '../objects/irrigation';
import {IrrigationService} from '../services/irrigationService';

@Component({
  selector: 'app-irrigation-list',
  templateUrl: './irrigation-list.component.html',
  styleUrls: ['./irrigation-list.component.css']
})
export class IrrigationListComponent implements OnInit {

 public irrigations_error:boolean=false;
  irrigations:Irrigation[];
  query:string;

  constructor(private router:Router, private svc: IrrigationService, private route:ActivatedRoute) { 
         
  this.route
      .queryParams
      .subscribe(params=>{this.query=params['query']||'';});

  }
          
  ngOnInit() {
     this.svc.getIrrigationList().subscribe(
       data=>{this.irrigations=data},
       err=>{this.irrigations_error=true;}
     )
  }

}
