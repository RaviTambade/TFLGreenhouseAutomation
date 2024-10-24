import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Environment} from '../objects/environment';
import {EnvironmentService} from '../services/environmentService';

@Component({
  selector: 'app-environment-detail',
  templateUrl: './environment-detail.component.html',
  styleUrls: ['./environment-detail.component.css']
})
export class EnvironmentDetailComponent implements OnInit {

 id:number;
  environment:Environment;
 
  public environment_error:Boolean;
 constructor(private route:ActivatedRoute, private svc:EnvironmentService,
              private location:Location){
       this.environment= new  Environment(12,12,12,12,12,12,13,23,4356,67,76,33,68,9);
   
    route.params.subscribe(params => { this.id = params['climateId']; });
    console.log(this.id);
   }
          
  ngOnInit():void {
   this.svc.search(this.id).subscribe(
     data=>{this.environment=data},
     err=>{this.environment_error=true;})
  }

}
