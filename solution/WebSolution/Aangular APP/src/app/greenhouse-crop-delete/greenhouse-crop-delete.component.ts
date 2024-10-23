import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Crop} from '../objects/crop';
import {CropService} from '../services/cropService';

@Component({
  selector: 'app-greenhouse-crop-delete',
  templateUrl: './greenhouse-crop-delete.component.html',
  styleUrls: ['./greenhouse-crop-delete.component.css']
})
export class GreenhouseCropDeleteComponent implements OnInit {

 id:number;
  crop:Crop;
 
  public crop_error:Boolean;
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
   
  yes(): void {
                this.svc.delete(this.crop.cropId);
                this.location.back();
  }
  
  no(): void {
                this.location.back();
  }


}
