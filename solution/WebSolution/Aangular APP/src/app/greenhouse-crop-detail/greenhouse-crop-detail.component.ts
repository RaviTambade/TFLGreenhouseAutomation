import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import {Crop} from '../objects/crop';
import {CropService} from '../services/cropService';

@Component({
  selector: 'greenhouse-crop-detail',
  templateUrl: './greenhouse-crop-detail.component.html',
  styleUrls: ['./greenhouse-crop-detail.component.css']
})
export class GreenhouseCropDetailComponent implements OnInit {

 
  crop:Crop;
  id:number;
  crop_error:boolean;
   constructor(private route:ActivatedRoute, private svc:CropService,
              private location:Location){
     this.crop= new  Crop(105,"Gerbera","Flower","It is a flower",new Date(2017,2,16,10,20,15,0),"","Sapling");
   
    route.params.subscribe(params => { this.id = params['cropId']; });
    console.log(this.id);
   }
          
  ngOnInit():void {
   this.svc.search(this.id).subscribe(
     data=>{this.crop=data},
     err=>{this.crop_error=true;})
  }


}
