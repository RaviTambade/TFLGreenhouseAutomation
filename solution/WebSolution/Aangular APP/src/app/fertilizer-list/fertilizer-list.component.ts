import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {Fertilizer} from '../objects/fertilizer';
import {FertilizerService} from '../services/fertilizerService';

@Component({
  selector: 'app-fertilizer-list',
  templateUrl: './fertilizer-list.component.html',
  styleUrls: ['./fertilizer-list.component.css']
})
export class FertilizerListComponent implements OnInit {

   public fertilizers_error:boolean=false;
  fertilizers:Fertilizer[];
 query:string;
  constructor( private router:Router,private svc:FertilizerService,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
           
  ngOnInit() {
          
     this.svc.getfertilizers().subscribe(
       data=>{this.fertilizers=data},
       err=>{this.fertilizers_error=true;}
      
     )} 
}



  