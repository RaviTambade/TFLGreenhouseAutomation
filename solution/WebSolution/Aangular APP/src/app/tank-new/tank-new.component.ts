import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { Tank} from '../objects/tank';
import { TankService } from '../services/tankService';
@Component({
  selector: 'app-tank-new',
  templateUrl: './tank-new.component.html',
  styleUrls: ['./tank-new.component.css']
})
export class TankNewComponent implements OnInit {
value: Tank;
   
  constructor(public route: ActivatedRoute, public svc: TankService,
              public location: Location) {
  } 

  ngOnInit(): void { }

   submit(form) {
      this.value = form; 
      this.svc.insert(this.value);
      this.location.back();
  }
  back(): void {
      this.location.back();
  }

}
