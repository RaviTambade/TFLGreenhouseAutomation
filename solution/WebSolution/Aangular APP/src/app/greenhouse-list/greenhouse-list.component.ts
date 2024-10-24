import { Component, OnInit,ReflectiveInjector } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';

import {Greenhouse} from '../objects/greenhouse';

import {GreenhouseService} from '../services/greenhouseservice';

@Component({
  selector: 'greenhouse-list',
  templateUrl: './greenhouse-list.component.html',
  styleUrls: ['./greenhouse-list.component.css']
})
export class GreenhouseListComponent implements OnInit {

  public greenhouses_error:boolean=false;
  greenhouses:Greenhouse[];
  query:string;
  constructor( private router:Router,private svc:GreenhouseService,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
      
  ngOnInit() {
        
     this.svc.getAllGreenhouses().subscribe(
       data=>{this.greenhouses=data},
       err=>{this.greenhouses_error=true;}
      
     )}
 
}
