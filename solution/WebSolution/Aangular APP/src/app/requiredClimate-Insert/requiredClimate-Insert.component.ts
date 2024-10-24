import { Component, OnInit } from '@angular/core';
import {RequiredClimate} from '../objects/requiredClimate';
import {RequiredClimateService} from '../services/requiredClimateService';



import { FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'requiredClimate-add',
  templateUrl: './requiredClimate-Insert.component.html',
  styleUrls: ['./requiredClimate-Insert.component.css']
})
export class RequiredClimateInsertComponent {

  myForm: FormGroup;
 

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'Name':  ['', Validators.required]
    });
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
