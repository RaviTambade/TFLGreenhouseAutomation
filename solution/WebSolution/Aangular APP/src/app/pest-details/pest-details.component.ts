import { Component, OnInit ,ReflectiveInjector} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Pest} from '../objects/pest';
import {PestService} from '../services/pestService';
@Component({
  selector: 'app-pest-details',
  templateUrl: './pest-details.component.html',
  styleUrls: ['./pest-details.component.css']
})
export class PestDetailsComponent implements OnInit {
  pestId:number;
  pest:Pest;
  public pest_error:Boolean;
  constructor(private route:ActivatedRoute, private svc:PestService,
              private location:Location) { 
        this.pest=new Pest(123,"name","description","symptoms","remedy");
        route.params.subscribe(params => { this.pestId = params['pestId']; });
        console.log(this.pestId);

  }
          
  ngOnInit():void {
     this.svc.search(this.pestId).subscribe(
     data=>{this.pest=data},
     err=>{this.pest_error=true;})
  }


}
