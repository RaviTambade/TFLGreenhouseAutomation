import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Crop} from '../objects/crop';
import {CropService} from '../services/cropService';

@Component({
  selector: 'greenhouse-crop-insert',
  templateUrl: './greenhouse-crop-insert.component.html',
  styleUrls: ['./greenhouse-crop-insert.component.css']
})
export class GreenhouseCropInsertComponent {

    value: Crop;
   
  constructor(public route: ActivatedRoute, public svc: CropService,
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