import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Fertilizer} from '../objects/fertilizer';
import {FertilizerService} from '../services/fertilizerService';

@Component({
  selector: 'app-fertilizer-new',
  templateUrl: './fertilizer-new.component.html',
  styleUrls: ['./fertilizer-new.component.css']
})
export class FertilizerNewComponent {
 public diseases_error:boolean=false;

    value: Fertilizer;
   
  constructor(public route: ActivatedRoute, public svc: FertilizerService,
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
