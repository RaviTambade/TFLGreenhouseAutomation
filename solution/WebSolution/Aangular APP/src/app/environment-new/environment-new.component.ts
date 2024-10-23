import { Component, OnInit ,ReflectiveInjector} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Environment} from '../objects/environment';
import {EnvironmentService} from '../services/environmentService';
@Component({
  selector: 'app-environment-new',
  templateUrl: './environment-new.component.html',
  styleUrls: ['./environment-new.component.css']
})
export class EnvironmentNewComponent implements OnInit {

 value: Environment;
   
  constructor(public route: ActivatedRoute, public svc: EnvironmentService,
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
