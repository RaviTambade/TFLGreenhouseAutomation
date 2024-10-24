import { Component, OnInit, ReflectiveInjector } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Disease} from '../objects/disease';
import {DiseaseService} from '../services/diseaseService';


@Component({
  selector: 'disease-details',
  templateUrl: './disease-details.component.html',
  styleUrls: ['./disease-details.component.css']
})
export class DiseaseDetailsComponent implements OnInit {
 id:number;
  disease:Disease;
 
  public disease_error:Boolean;
 constructor(private route:ActivatedRoute, private svc:DiseaseService,
              private location:Location){
     this.disease= new  Disease(123,"name","discription","symptoms","remedy");
   
    route.params.subscribe(params => { this.id = params['diseaseId']; });
    console.log(this.id);
   }
          
  ngOnInit():void {
   this.svc.search(this.id).subscribe(
     data=>{this.disease=data},
     err=>{this.disease_error=true;})
  }


}

 