import { Component, OnInit,ReflectiveInjector} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Pest} from '../objects/pest';
import {PestService} from '../services/pestService';

@Component({
  selector: 'app-pest-update',
  templateUrl: './pest-update.component.html',
  styleUrls: ['./pest-update.component.css']
})
export class PestUpdateComponent implements OnInit {
      pestId:number;
      submitted = false;
      pest:Pest;
      public pests_error:boolean=false;
  constructor(public route: ActivatedRoute, public svc: PestService,
                public location: Location) { 
                  this.pest=new Pest(123,"name","description","symptoms","remedy");
                  route.params.subscribe(params=>{this.pestId=params['pestId'];});
  }
          
  ngOnInit():void {
      this.svc.search(this.pestId).subscribe(
            data=>{this.pest=data},
            err=>{this.pests_error=true;}
      )
}


  submit(form): void {
            this.svc.update(this.pest);
            this.location.back();    
       }
  back():void{
        this.location.back();
  }

}
