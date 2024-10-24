import { Component, OnInit ,ReflectiveInjector} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Environment} from '../objects/environment';
import {EnvironmentService} from '../services/environmentService';

@Component({
  selector: 'environment-list',
  templateUrl: './environment-list.component.html',
  styleUrls: ['./environment-list.component.css']
})
export class EnvironmentListComponent implements OnInit {
        
   public diseases_error:boolean=false;
  environments:Environment[];
 query:string;
  constructor( private router:Router,private svc:EnvironmentService,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
           
  ngOnInit() {
        
     this.svc.getenvironments().subscribe(
       data=>{this.environments=data},
       err=>{this.diseases_error=true;}
      
     )} 

}
