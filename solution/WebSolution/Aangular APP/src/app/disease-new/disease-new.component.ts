import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Disease} from '../objects/disease';
import {DiseaseService} from '../services/diseaseService';
@Component({
  selector: 'disease-new',
  templateUrl: './disease-new.component.html',
  styleUrls: ['./disease-new.component.css']
})
export class DiseaseNewComponent{

     value: Disease;
   
  constructor(public route: ActivatedRoute, public svc: DiseaseService,
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