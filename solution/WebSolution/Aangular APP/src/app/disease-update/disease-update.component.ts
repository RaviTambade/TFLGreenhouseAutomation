import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Disease} from '../objects/disease';
import {DiseaseService} from '../services/diseaseService';

@Component({
  selector: 'disease-update',
  templateUrl: './disease-update.component.html',
  styleUrls: ['./disease-update.component.css']
})
export class DiseaseUpdateComponent implements OnInit {

  id: number;
  submitted = false;
  disease:Disease;
public diseases_error:boolean=false;

  constructor(public route: ActivatedRoute, public svc: DiseaseService,
                public location: Location) {

                
                this.disease= new  Disease(123,"name","discription","symptoms","remedy");
               route.params.subscribe(params => { this.id = params['diseaseId']; });
    }

    ngOnInit(): void {
    this.svc.search(this.id).subscribe(
                                      data=>{this.disease=data},
                                      err=>{this.diseases_error=true;}
                                    )             
    }
  
  submit(form)  {
            this.svc.update(this.disease);
            this.location.back();
  }

  back(): void {
      this.location.back();
  } 
}