import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { Tank} from '../objects/tank';
import { TankService } from '../services/tankService';
@Component({
  selector: 'app-tank-update',
  templateUrl: './tank-update.component.html',
  styleUrls: ['./tank-update.component.css']
})
export class TankUpdateComponent implements OnInit {
id: number;
  submitted = false;
  tank:Tank;
public tanks_error:boolean=false;

  constructor(public route: ActivatedRoute, public svc: TankService,
                public location: Location) {

                
                this.tank= new Tank(300,"Tank A",20,"Tank is empty",2000);
   
    route.params.subscribe(params => { this.id = params['tankId']; });
    }

    ngOnInit(): void {
    this.svc.search(this.id).subscribe(
                                      data=>{this.tank=data},
                                       err=>{this.tanks_error=true;}
                                    )             
    }
  
  submit(form)  {
            this.svc.update(this.tank);
            this.location.back();
  }

  back(): void {
      this.location.back();
  } 

}
