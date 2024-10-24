import { Component, OnInit ,ReflectiveInjector} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Environment} from '../objects/environment';
import {EnvironmentService} from '../services/environmentService';
@Component({
  selector: 'app-environment-update',
  templateUrl: './environment-update.component.html',
  styleUrls: ['./environment-update.component.css']
})
export class EnvironmentUpdateComponent implements OnInit {

 id: number;
  submitted = false;
  environment:Environment;
public environment_error:boolean=false;

  constructor(public route: ActivatedRoute, public svc: EnvironmentService,
                public location: Location) {

                
                 this.environment= new  Environment(12,12,12,12,12,12,13,23,4356,67,76,33,68,9);
               route.params.subscribe(params => { this.id = params['climateId']; });
    }

    ngOnInit(): void {
    this.svc.search(this.id).subscribe(
                                      data=>{this.environment=data},
                                      err=>{this.environment_error=true;}
                                    )             
    }
  
  onSubmit(form)  {
            this.svc.update(this.environment);
            this.location.back();
  }

  back(): void {
      this.location.back();
  } 

}
