import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Pesticide} from '../objects/pesticide';
import {PesticideService} from '../services/pesticideService';


@Component({
  selector: 'pesticide-detail',
  templateUrl: './pesticide-detail.component.html',
  styleUrls: ['./pesticide-detail.component.css']
})
export class PesticideDetailsComponent implements OnInit {
id:number;
  pesticide:Pesticide;
 
  public pesticide_error:Boolean;
 constructor(private route:ActivatedRoute, private svc:PesticideService,
              private location:Location){
     this.pesticide= new  Pesticide(1211,"name","discription","symptoms");
   
    route.params.subscribe(params => { this.id = params['pesticideID']; });
    console.log(this.id);
   }
          
  ngOnInit():void {
   this.svc.search(this.id).subscribe(
     data=>{this.pesticide=data},
     err=>{this.pesticide_error=true;})
  }

}
