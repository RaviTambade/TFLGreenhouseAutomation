import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Pesticide} from '../objects/pesticide';
import {PesticideService} from '../services/pesticideService';

@Component({
  selector: 'pesticide-update',
  templateUrl: './pesticide-update.component.html',
  styleUrls: ['./pesticide-update.component.css']
})

export class PesticideUpdateComponent implements OnInit {
      id: number;
  submitted = false;
  pesticide:Pesticide;
public pesticides_error:boolean=false;

  constructor(public route: ActivatedRoute, public svc: PesticideService,
                public location: Location) {

                
                this.pesticide= new  Pesticide(123,"name","discription","symptoms");
               route.params.subscribe(params => { this.id = params['pesticideID']; });
    }

    ngOnInit(): void {
    this.svc.search(this.id).subscribe(
                                      data=>{this.pesticide=data},
                                      err=>{this.pesticides_error=true;}
                                    )             
    }
  
  onSubmit(form)  {
            this.svc.update(this.pesticide);
            this.location.back();
  }

  back(): void {
      this.location.back();
  } 
}