import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Tank} from '../objects/tank';
import { TankService } from '../services/tankService';
@Component({
  selector: 'app-tank-detail',
  templateUrl: './tank-detail.component.html',
  styleUrls: ['./tank-detail.component.css']
})
export class TankDetailComponent implements OnInit {

 tank:Tank;
  id:number;
  tank_error:boolean;
   constructor(private route:ActivatedRoute, private svc:TankService,
              private location:Location){
     this.tank= new Tank(300,"Tank A",20,"Tank is empty",2000);
   
    route.params.subscribe(params => { this.id = params['tankId']; });
 
   }
          
  ngOnInit():void {
   this.svc.search(this.id).subscribe(
     data=>{this.tank=data},
     err=>{this.tank_error=true;})
  }
}
