import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Fertilizer} from '../objects/fertilizer';
import {FertilizerService} from '../services/fertilizerService';

@Component({
  selector: 'app-fertilizer-detail',
  templateUrl: './fertilizer-detail.component.html',
  styleUrls: ['./fertilizer-detail.component.css']
})
export class FertilizerDetailComponent implements OnInit {
 
id:number;
  fertilizer:Fertilizer;
 
  public fertilizer_error:Boolean;
 constructor(private route:ActivatedRoute, private svc:FertilizerService,
              private location:Location){
     this.fertilizer= new  Fertilizer(12,"Potassium","KH02","",12,12,12,12,12,12,12,12,12,12,12,12,12);
   
    route.params.subscribe(params => { this.id = params['FertilizerId']; });
    
   }
          
  ngOnInit():void {
   this.svc.search(this.id).subscribe(
     data=>{this.fertilizer=data},
     err=>{this.fertilizer_error=true;})
  }

}
