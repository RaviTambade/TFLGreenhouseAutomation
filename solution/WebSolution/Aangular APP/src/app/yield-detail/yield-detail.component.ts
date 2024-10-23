import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Yield} from '../objects/yield';
import {YieldService} from '../services/yieldService';
@Component({
  selector: 'app-yield-detail',
  templateUrl: './yield-detail.component.html',
  styleUrls: ['./yield-detail.component.css']
})
export class YieldDetailComponent implements OnInit {
id:number;
  yld:Yield;
 
  public yld_error:Boolean;
 constructor(private route:ActivatedRoute, private svc:YieldService,
              private location:Location){
     this.yld= new  Yield(130,40,"Gerbera",12,4,2017,"Maal");
   
    route.params.subscribe(params => { this.id = params['yieldId']; });
    
   }
          
  ngOnInit():void {
   this.svc.search(this.id).subscribe(
     data=>{this.yld=data},
     err=>{this.yld_error=true;})
  }
}
