import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Pesticide} from '../objects/pesticide';
import {PesticideService} from '../services/pesticideService';



import { FormBuilder, FormGroup,Validators} from '@angular/forms';
 
@Component({
  selector: 'pesticide-add',
  templateUrl: './pesticide-add.component.html',
  styleUrls: ['./pesticide-add.component.css']
})
export class PesticideAddComponent {

   
    value: Pesticide;
   
  constructor(public route: ActivatedRoute, public svc: PesticideService,
              public location: Location) {
  } 

  ngOnInit(): void { }

  onSubmit(form) {
      this.value = form; 
      this.svc.insert(this.value);
      this.location.back();
  }

  back(): void {
      this.location.back();
  }

}
