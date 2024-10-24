import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-irrigation-new',
  templateUrl: './irrigation-new.component.html',
  styleUrls: ['./irrigation-new.component.css']
})
export class IrrigationNewComponent  {

  myForm: FormGroup;
  irrigationName: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'irrigationName':  ['', Validators.required]
    });
  }
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
