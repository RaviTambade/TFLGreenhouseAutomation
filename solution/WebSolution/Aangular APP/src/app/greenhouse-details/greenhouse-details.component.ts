import { Component, OnInit,ReflectiveInjector } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Greenhouse} from '../objects/greenhouse';
import {GreenhouseService} from '../services/greenhouseservice';


@Component({
  selector: 'greenhouse-details',
  templateUrl: './greenhouse-details.component.html',
  styleUrls: ['./greenhouse-details.component.css']
})


export class GreenhouseDetailsComponent implements OnInit {
 id:number;
  greenhouse:Greenhouse;
 
  public greenhouse_error:Boolean;
 constructor(private route:ActivatedRoute, private svc:GreenhouseService,
              private location:Location){
     this.greenhouse= new  Greenhouse(123,"title","discription","crop",2,4,2017,"stage",100,30,10,"image");
   
    route.params.subscribe(params => { this.id = params['greenhouseId']; });
    console.log(this.id);
   }
          
  ngOnInit():void {
   this.svc.search(this.id).subscribe(
     data=>{this.greenhouse=data},
     err=>{this.greenhouse_error=true;})
  }


}

 