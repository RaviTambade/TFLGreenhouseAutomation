import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {Solution} from '../objects/solution';
import {SolutionService} from '../services/solutionService';

@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.css']
})
export class SolutionListComponent implements OnInit {

  public solutions_error:boolean=false;
   solutions:Solution[];
 query:string;
  constructor( private router:Router,private svc:SolutionService,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
          
  ngOnInit() {
        console.log('In Solution Component');
     this.svc.getsolution().subscribe(
       data=>{this.solutions=data},
       err=>{this.solutions_error=true;}
      
     )}
  }

 








  