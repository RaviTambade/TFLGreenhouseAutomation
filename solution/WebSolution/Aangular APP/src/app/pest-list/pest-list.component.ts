import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import{Pest} from '../objects/pest';
import{PestService} from '../services/pestService';

@Component({
  selector: 'app-pest-list',
  templateUrl: './pest-list.component.html',
  styleUrls: ['./pest-list.component.css']
})

export class PestListComponent implements OnInit {
 public pests_error:boolean=true; 
 pests:Pest[];
 query:String;
  constructor(private router:Router,private svc: PestService,private route:ActivatedRoute) { 
        this.route.queryParams.subscribe(params=>{this.query=params['query']||'';});
  }
          
  ngOnInit() {
     console.log("In Pest Component");
     this.svc.getAllPests().subscribe(
       data =>{this.pests=data},
       err =>{this.pests_error=true;}
     )}

}
