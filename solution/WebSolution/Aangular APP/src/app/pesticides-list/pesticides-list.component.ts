import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Pesticide} from '../objects/pesticide';
import {PesticideService} from '../services/pesticideService';

@Component({
  selector: 'pesticide-list',
  templateUrl: './pesticides-list.component.html',
  styleUrls: ['./pesticides-list.component.css']
})
export class PesticideListComponent implements OnInit {

  
  public pesticides_error:boolean=false;
   pesticides:Pesticide[];
 query:string;
  constructor( private router:Router,private svc:PesticideService,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
          
  ngOnInit() {
         
     this.svc.getAllpesticides().subscribe(
       data=>{this.pesticides=data},
       err=>{this.pesticides_error=true;}
      
     )}
}
