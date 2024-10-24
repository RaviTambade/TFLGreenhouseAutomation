import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Pesticide} from '../objects/pesticide';
import {PesticideService} from '../services/pesticideService';

@Component({
  selector: 'app-pesticide-delete',
  templateUrl: './pesticide-delete.component.html',
  styleUrls: ['./pesticide-delete.component.css']
})
export class PesticideDeleteComponent implements OnInit {

   id:number;
  pesticide:Pesticide;
 
  public nutrition_error:Boolean;
 constructor(private route:ActivatedRoute, private svc:PesticideService,
              private location:Location){
     this.pesticide= new  Pesticide(123,"name","discription","symptoms");
   
    route.params.subscribe(params => { this.id = params['pesticideID']; });
    console.log(this.id);
   }

   ngOnInit():void {
              this.svc.search(this.id).subscribe(
                                                data=>{this.pesticide=data},
                                                err=>{this.nutrition_error=true;})     
  }
   
  yes(): void {
                this.svc.delete(this.pesticide.pesticideID);
                this.location.back();
  }
  
  no(): void {
                this.location.back();
  }
}
