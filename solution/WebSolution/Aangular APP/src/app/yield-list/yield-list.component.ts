import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Yield} from '../objects/yield';
import {YieldService} from '../services/yieldService';
@Component({
  selector: 'app-yield-list',
  templateUrl: './yield-list.component.html',
  styleUrls: ['./yield-list.component.css']
})
export class YieldListComponent implements OnInit {
 public ylds_error:boolean=false;
  yilds:Yield[];
 query:string;
  constructor( private router:Router,private svc:YieldService,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
           
  ngOnInit() {
        
     this.svc.getAll().subscribe(
       data=>{this.yilds=data},
       err=>{this.ylds_error=true;}
      
     )} 

}
