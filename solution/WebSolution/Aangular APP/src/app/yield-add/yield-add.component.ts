import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Yield} from '../objects/yield';
import {YieldService} from '../services/yieldService';
@Component({
  selector: 'app-yield-add',
  templateUrl: './yield-add.component.html',
  styleUrls: ['./yield-add.component.css']
})
export class YieldAddComponent implements OnInit {


     value: Yield;
   
  constructor(public route: ActivatedRoute, public svc: YieldService,
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
