import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Solution} from '../objects/solution';
import {SolutionService} from '../services/solutionService';

@Component({
  selector: 'app-solution-details',
  templateUrl: './solution-details.component.html',
  styleUrls: ['./solution-details.component.css']
})
export class SolutionDetailsComponent implements OnInit {

  id:number;
  solution:Solution;
 
  public solution_error:Boolean;
 constructor(private route:ActivatedRoute, private svc:SolutionService,
              private location:Location){
     this.solution= new Solution(123,"rosefertigation",23,"description",1,2017,2,1,10,"greenhouseName",[{}],"tankA");
    
   
    route.params.subscribe(params => { this.id = params['solutionId']; });
    console.log(this.id);
   }
          
  ngOnInit():void {
   this.svc.search(this.id).subscribe(
     data=>{this.solution=data},
     err=>{this.solution_error=true;})
  }


}

 



