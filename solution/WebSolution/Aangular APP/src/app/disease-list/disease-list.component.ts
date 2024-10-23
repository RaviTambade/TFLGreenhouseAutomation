import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {Disease} from '../objects/disease';
import {DiseaseService} from '../services/diseaseService';

@Component({
  selector: 'disease-list',
  templateUrl: './disease-list.component.html',
  styleUrls: ['./disease-list.component.css']
})
export class DiseaseListComponent implements OnInit {
 
   public diseases_error:boolean=false;
  diseases:Disease[];
 query:string;
  constructor( private router:Router,private svc:DiseaseService,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
           
  ngOnInit() {
        console.log('In Disease Component');
     this.svc.getdiseases().subscribe(
       data=>{this.diseases=data},
       err=>{this.diseases_error=true;}
      
     )} 
  }

 
