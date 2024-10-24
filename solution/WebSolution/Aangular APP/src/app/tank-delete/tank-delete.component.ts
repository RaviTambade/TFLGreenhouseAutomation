import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Tank} from '../objects/tank';
import { TankService } from '../services/tankService';
@Component({
  selector: 'app-tank-delete',
  templateUrl: './tank-delete.component.html',
  styleUrls: ['./tank-delete.component.css']
})
export class TankDeleteComponent implements OnInit {
tank:Tank;
  id:number;
  tanks_error:boolean;
 constructor(private route:ActivatedRoute, private svc:TankService,
              private location:Location){
      this.tank= new Tank(300,"Tank A",20,"Tank is empty",2000);
   
    route.params.subscribe(params => { this.id = params['tankId']; });
   }

   ngOnInit():void {
              this.svc.search(this.id).subscribe(
                                                data=>{this.tank=data},
                                                err=>{this.tanks_error=true;})     
  }
   
  yes(): void {
                this.svc.delete(this.tank.tankId);
                this.location.back();
  }
  
  no(): void {
                this.location.back();
  }


}
