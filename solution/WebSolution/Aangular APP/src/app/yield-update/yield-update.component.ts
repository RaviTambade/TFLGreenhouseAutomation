import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Yield} from '../objects/yield';
import {YieldService} from '../services/yieldService';
@Component({
  selector: 'app-yield-update',
  templateUrl: './yield-update.component.html',
  styleUrls: ['./yield-update.component.css']
})
export class YieldUpdateComponent implements OnInit {

  
  id: number;
  submitted = false;
  yld:Yield;
public yld_errors:boolean=false;

  constructor(public route: ActivatedRoute, public svc: YieldService,
                public location: Location) {

                
                 this.yld= new  Yield(130,40,"Gerbera",12,4,2017,"Maal");
               route.params.subscribe(params => { this.id = params['yieldId']; });
    }

    ngOnInit(): void {
    this.svc.search(this.id).subscribe(
                                      data=>{this.yld=data},
                                      err=>{this.yld_errors=true;}
                                    )             
    }
  
  submit(form)  {
            this.svc.update(this.yld);
            this.location.back();
  }

  back(): void {
      this.location.back();
  } 

}
