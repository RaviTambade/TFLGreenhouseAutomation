import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Pest} from '../objects/pest';
import {PestService} from '../services/pestService';

@Component({
  selector: 'app-pest-new',
  templateUrl: './pest-new.component.html',
  styleUrls: ['./pest-new.component.css']
})
export class PestNewComponent {
  value:Pest;
  constructor(public route: ActivatedRoute, public svc: PestService,
              public location: Location) {
    
    
  }
  ngOnInit():void{}
  submit(form): void {
    this.value=form;
    this.svc.insert(this.value);
    this.location.back();
  }
  back(): void {
      this.location.back();
  }

}